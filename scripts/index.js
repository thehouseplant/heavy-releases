const axios = require('axios');
const fs = require('fs');
const { groupEnd } = require('console');

(async () => {
  try {
    // Add a placeholder for totalReleases
    let totalReleases = [];

    // Find and calculate the number of pages we will crawl
    const response = await axios.get(`https://www.metal-archives.com/release/ajax-upcoming/json/1?sEcho=1`);
    let pages = Math.floor(response.data.iTotalRecords / 100);
    console.log(`Total pages: ${pages}`);
    
    // Loop through each page and fetch its releases
    for (let i = 1; i < pages + 1; i++) {
      console.log(`Loading data for page ${i}`);
      let releases = await axios.get(`https://www.metal-archives.com/release/ajax-upcoming/json/1?sEcho=${i}&iColumns=5&sColumns=&iDisplayStart=${i}00`);

      // Loop through the releases found on each page
      for (j = 0; j < releases.data.aaData.length; j++) {

        // Set raw response values
        let rawBand = releases.data.aaData[j][0];
        let rawAlbum = releases.data.aaData[j][1];

        // Parse band URL and name
        let band = parseAnchorValue(rawBand);
        let splitBandUrl = rawBand.split('"');
        let bandUrl = splitBandUrl[1];

        // Parse album URL and name
        let album = parseAnchorValue(rawAlbum);
        let splitAlbumUrl = rawAlbum.split('"');
        let albumUrl = splitAlbumUrl[1];

        // Set remaining values
        let type = releases.data.aaData[j][2];
        let genre = releases.data.aaData[j][3];
        let date = releases.data.aaData[j][4];
        
        let release = {
          band: band,
          bandUrl: bandUrl,
          album: album,
          albumUrl: albumUrl,
          type: type,
          genre: genre,
          date: date
        };

        totalReleases.push(release);
      }
    }

    console.log(`Writing ${totalReleases.length} releases`);
    fs.writeFileSync('./data/releases.json', JSON.stringify(totalReleases));
  } catch (err) {
    console.log(err.response.body);
  }
})();

function parseAnchorValue(rawAnchor) {
  return rawAnchor.match(/<a [^>]+>([^<]+)<\/a>/)[1];
}