import React from 'react'
import { Row, Spinner } from 'react-bootstrap'

export const FullPageLoader = () => {
  return (
    <Row className="justify-content-center align-items-center w-100" style={{ height: "100vh"}}>
       <Spinner size="lg" animation="border" variant="primary" />
    </Row>
  )
}
