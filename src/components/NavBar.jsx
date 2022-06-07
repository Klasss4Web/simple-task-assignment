import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const NavBar = () => {
  return (
  <Navbar bg="light">
    <Container fluid>
      <Navbar.Brand href="#home">Task Assignment</Navbar.Brand>
    </Container>
  </Navbar>
  )
}
