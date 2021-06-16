import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';


interface ConfirmEmailProps {
  email: string,
  intervalGetEmailConfirmStatus(dispatch: Dispatch<any>): any,
  handleSignOut(dispatch: Dispatch<any>): void,
  handleSendVerificationEmail(dispatch: Dispatch<any>): void
}

const ConfirmEmail: React.FC<ConfirmEmailProps> = ({
  email,
  intervalGetEmailConfirmStatus,
  handleSignOut,
  handleSendVerificationEmail
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    intervalGetEmailConfirmStatus(dispatch)
    return () => {
      clearInterval(intervalGetEmailConfirmStatus(dispatch));
    };
  }, []);
  return (
    <div className="confirmEmailContent"
      data-testid='confirmEmailComponent'
    >
      <div
        className="confirmEmailTitle"
        data-testid='confirmEmailTitle'
      >To już ostatni krok rejestracji</div>
      <div
        className="confirmEmailBody"
        data-testid='confirmEmailDescription'
      >
        Na adres: <strong>{email}</strong> wysłaliśmy prośbę o
        potwierdzenie że podany email podczas rejestracji jest poprawny
      </div>
      <div
        className="confirmEmailButton"
        data-testid='confirmEmailButtonSendAgain'
      >
        <button
          className="btn btn-green btn-capitalize btn-radius btn-login"
          data-testid='confirmButton'
          onClick={() => {
            handleSendVerificationEmail(dispatch);
          }}
        >
          Wyślij ponownie
        </button>
        <button
          className="btn btn-red btn-capitalize btn-radius btn-login"
          data-testid='cancelButton'
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
