import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function SignedInLinks() {
  return (
    <Nav>
      <Navbar.Brand href="/addstock">Add Stocks</Navbar.Brand>
      <Navbar.Brand href="/logout">Logout</Navbar.Brand>
    </Nav>
  );
}
