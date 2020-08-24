import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Table from '../components/table'
import JSONData from '../../data/releases.json'

function IndexPage() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Band',
        accessor: 'band',
      },
      {
        Header: 'Album',
        accessor: 'album',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Genre',
        accessor: 'genre',
      },
      {
        Header: 'Release Date',
        accessor: 'date',
      },
    ],
    []
  )

  const data = JSONData

  return (
    <Layout>
      <SEO title="Heavy Releases" />
      <h1>Releases</h1>
      <p>
        <Table columns={columns} data={data} />
      </p>
    </Layout>
  )
}

export default IndexPage
