import React, { ReactChild, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from '../redux/store';

interface PrivateRouteProps {
  setLoginModalShow(show: boolean): void,
  // FIXME: add curent props
  component: React.FC<any>
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, setLoginModalShow, ...rest }) => {
  // getFirebase();
  // const user = getCurrentUser();
  const userAuth = useSelector((state: RootState) => state.userAction);
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
