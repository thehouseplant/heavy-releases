module.exports = {
  siteMetadata: {
    title: `Heavy Releases`,
    description: `A listing of upcoming heavy metal releases`,
    author: `Sean Collins`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
