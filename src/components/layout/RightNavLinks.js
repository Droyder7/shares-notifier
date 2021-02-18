import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

export default function RightNavLinks() {
  const isAuthenticated = false;
  return <>{isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}</>;
}
