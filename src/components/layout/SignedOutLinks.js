import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function SignedOutLinks() {
  return (
    <Nav>
      <Navbar.Brand href="/signup">Sign Up</Navbar.Brand>
      <Navbar.Brand href="/login">Log In</Navbar.Brand>
    </Nav>
  );
}
