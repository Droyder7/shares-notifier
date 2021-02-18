import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function SignedOutLinks() {
  return (
    <Nav>
      <Navbar.Brand href="/signup">Sign Up</Navbar.Brand>
      <Navbar.Brand href="/signin">Sign In</Navbar.Brand>
    </Nav>
  );
}
