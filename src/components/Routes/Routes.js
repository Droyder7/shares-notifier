import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignIn from '../auth/SignIn';
import Home from '../pages/Home';
import StockList from '../stocks/StockList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/stocks" component={StockList} />
      </Switch>
    </BrowserRouter>
  );
}
