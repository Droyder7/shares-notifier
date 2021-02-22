import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../auth/Login';
import Signup from '../auth/SignUp';
import Error from '../pages/Error';
import Stocks from '../stocks/Stocks';

export default function Routes() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '70vh' }}
    >
      <div className="w-100" style={{ maxWidth: '800px' }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/stocks" component={Stocks} />
            {/* <PrivateRoute path="/addStock" component={AddStock} /> */}
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}
