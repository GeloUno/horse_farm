import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  reloadUserAuthDataAction,
  userSignOutAction,
} from '../../redux/actions/userActions';

const handleSignOut = (dispatch) => {
  dispatch(userSignOutAction);
};

const ConfirmEmail = ({ email, user }) => {
  // sendVerificationEmail();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(reloadUserAuthDataAction());

      console.log('This will run after 3 second!', user);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="confirmEmailContent">
      <div className="confirmEmailTitle">To już ostatni krok rejestracji</div>
      <div className="confirmEmailBody">
        Na podany adres <strong>{email}</strong> wysłaliśmy prośbę o
        potwierdzenie że podany email podczas rejestracji jest poprawny
      </div>
      <div className="confirmEmailButton">
        <button className="btn btn-green btn-capitalize btn-radius btn-login">
          Wyślij ponownie
        </button>
        <button
          className="btn btn-red btn-capitalize btn-radius btn-login"
          onClick={() => {
            handleSignOut(dispatch);
          }}
        >
          anuluj
        </button>
      </div>
    </div>
  );
};

export default ConfirmEmail;
