'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container, NavDropdown, Button, Spinner } from 'react-bootstrap';

const NavBar: React.FC = () => {
  const { data: session, status } = useSession();
  const userWithRole = session?.user as { email: string; randomKey: string } | undefined;
  const role = userWithRole?.randomKey;
  const currentUser = userWithRole?.email;
  const pathName = usePathname();

  if (status === 'loading') {
    return (
      <Navbar bg="light" expand="lg" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="/">Campus Clubhouse</Navbar.Brand>
          <Spinner animation="border" size="sm" />
        </Container>
      </Navbar>
    );
  }

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
              <Nav.Link href="/club-admin" active={pathName === '/club-admin'}>Admin</Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {session ? (
              <NavDropdown id="user-dropdown" title={currentUser || 'User'}>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/auth/change-password">Change Password</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/api/auth/signout">Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link href="/auth/signin">Login</Nav.Link>
                <Button href="/auth/signup" variant="success" className="ms-2">
                  Sign Up
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
