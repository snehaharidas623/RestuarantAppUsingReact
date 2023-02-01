import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
        <Navbar bg="dark" varient="dark">
         <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
           React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header