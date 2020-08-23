import React from "react"
import { useTable, usePagination, useSortBy } from "react-table"
import BTable from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Pagination from "react-bootstrap/Pagination"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination,
  )

  return (
    <>
      <BTable striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <Button style={{ marginLeft: '5px' }} size="sm" variant="outline-primary"><BsChevronDown /></Button>
                        : <Button style={{ marginLeft: '5px' }} size="sm" variant="outline-primary"><BsChevronUp /></Button>
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </BTable>

      <Row>
        <Col>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </Col>

        <Col>
          <Pagination>
            <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
            <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
            <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
            <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
          </Pagination>
        </Col>

        <Col>
          <Form.Control as="select"
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Form.Control>
        </Col>
      </Row>
    </>
  )
}

export default Table
