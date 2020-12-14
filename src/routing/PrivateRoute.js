import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, setLoginModalShow, ...rest }) => {
  // getFirebase();
  // const user = getCurrentUser();
  const userAuth = useSelector((state) => state.userAction);
  const { user } = userAuth;
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.email ? (
          <Component {...props} />
        ) : (
          <Redirect to="/">{setLoginModalShow(true)}</Redirect>
        )
      }
    />
  );
};

export default PrivateRoute;
