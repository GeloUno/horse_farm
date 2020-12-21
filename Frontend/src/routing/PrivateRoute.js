import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, setLoginModalShow, ...rest }) => {
  // getFirebase();
  // const user = getCurrentUser();
  const userAuth = useSelector((state) => state.userAction);
  const { user } = userAuth;
  return (
    // <>
    //   {console.log('user', user)}
    <Route
      {...rest}
      render={(props) =>
        (user && user.providerId && user.providerId !== 'password') ||
        (user &&
          user.providerId &&
          user.providerId === 'password' &&
          user.emailVerified) ? (
          <Component {...props} />
        ) : (
          // <Redirect to="/">{setLoginModalShow(true)}</Redirect>
          <Redirect
            to={{ pathname: '/', state: { action: setLoginModalShow(true) } }}
          />
        )
      }
    />
    // </>
  );
};

export default PrivateRoute;
