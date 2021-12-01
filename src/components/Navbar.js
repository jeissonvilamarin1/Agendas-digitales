import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap';

export const Navbar = () => {
      return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Button>Home</Button>
                <Button>Features</Button>
                <Button>Pricing</Button>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}
