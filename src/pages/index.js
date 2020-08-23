import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Table from '../components/table'

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
        accessor: 'releaseDate',
      },
    ],
    []
  )

  const data = []

  return (
    <Layout>
      <SEO title="Heavy Releases" />
      
      <p>
        <Table columns={columns} data={data} />
      </p>
    </Layout>
  )
}

export default IndexPage
