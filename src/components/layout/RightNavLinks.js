import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import isAuth from '../../helper/isAuth';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

export default function RightNavLinks() {
  const isAuthenticated = isAuth();
  return <>{isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}</>;
}
