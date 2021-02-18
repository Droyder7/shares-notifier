import { Route, Redirect } from 'react-router-dom';
import isAuth from '../../helper/isAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = isAuth;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
