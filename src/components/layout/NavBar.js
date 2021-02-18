import { Navbar, Container } from 'react-bootstrap';

import LeftNavLinks from './LeftNavLinks';
import RightNavLinks from './RightNavLinks';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Shares Notifier</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <LeftNavLinks />
          <RightNavLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
