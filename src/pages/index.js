import React from "react"
import { html } from "gridjs"
import { Grid } from "gridjs-react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JSONData from "../../data/releases.json"

const IndexPage = () => {
  const data = JSONData

  return (
    <Layout>
      <Seo title="Heavy Releases" />
      <Grid
        columns={[
          {
            id: "band",
            name: "Band",
            width: "17%",
            formatter: (_, row) =>
              html(
                `<a href='${row.cells[1].data}' target='_new'>${row.cells[0].data}</a>`
              ),
          },
          {
            id: "bandUrl",
            hidden: true,
          },
          {
            id: "album",
            name: "Album",
            width: "30%",
            formatter: (_, row) =>
              html(
                `<a href='${row.cells[3].data}' target='_new'>${row.cells[2].data}</a>`
              ),
          },
          {
            id: "albumUrl",
            hidden: true,
          },
          {
            id: "type",
            name: "Type",
            width: "10%",
          },
          {
            id: "genre",
            name: "Genre",
            width: "25%",
          },
          {
            id: "date",
            name: "Release",
            width: "18%",
          },
        ]}
        data={data}
        pagination={{
          limit: 10,
        }}
      />
    </Layout>
  )
}

export default IndexPage
