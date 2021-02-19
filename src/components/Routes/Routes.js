import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import StockList from '../stocks/StockList';
import Login from '../auth/Login';
import Signup from '../auth/SignUp';

export default function Routes() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '70vh' }}
    >
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/stocks" component={StockList} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}
