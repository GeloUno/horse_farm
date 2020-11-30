import React, { useContext } from 'react';
import RemenberPasswordFormik from '../Formik/RemenberPasswordFormik';

// import { RememberPasswordContext } from '../../App';

const RememberPassword = ({
  rememberPasswordModalToggle,
  loginModalToggle,
}) => {
  // const toogleModalPassword = useContext(RememberPasswordContext);
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        // e.stopPropagation();
        rememberPasswordModalToggle(e);
      }}
    >
      {/* {console.log('object', toogleModalPassword)} */}
      <div className="rememberPasswordModal">
        <div className="textModalContainer">
          <i
            className="fas fa-arrow-left backIcon accessToggleModalShow"
            onClick={(e) => {
              rememberPasswordModalToggle(e);
              loginModalToggle(e);
            }}
          ></i>
          <h2>
            Proszę podać e-mail w celu resetowania hasła. Instrukcja
            przywracania hasła będzie zawarta w wiadomości e-mail
          </h2>
        </div>
        <div className="inputModalContainer">
          <RemenberPasswordFormik />
        </div>
      </div>
    </div>
  );
};

export default RememberPassword;
