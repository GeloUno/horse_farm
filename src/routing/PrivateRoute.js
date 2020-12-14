import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getCurrentUser, getFirebase } from '../firebase';

const PrivateRoute = ({ component: Component, setLoginModalShow, ...rest }) => {
  getFirebase();
  const user = getCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/">{setLoginModalShow(true)}</Redirect>
        )
      }
    />
  );
};

export default PrivateRoute;
