'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/">
          <span className="fw-bold">Campus Clubhouse</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" active={pathName === '/'}>Home</Nav.Link>
            <Nav.Link href="/clubs" active={pathName === '/clubs'}>Clubs</Nav.Link>
            {role === 'ADMIN' && (
              <Nav.Link href="/admin" active={pathName === '/admin'}>Admin</Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/auth/signin">Login</Nav.Link>
            <Button href="/auth/signup" variant="success" className="ms-2">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
