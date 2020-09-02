import React from 'react';
import LoginHorseImg from '../../assets/LoginHorse.png';

const LoginUser = ({
  signinModalToggle,
  loginModalToggle,
  rememberPasswordModalToggle,
}) => {
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        loginModalToggle(e);
      }}
    >
      <div className="loginModal">
        <div className="imageModalContainer">
          <img className="modalImage" src={LoginHorseImg} alt="Konik" />
        </div>
        <div className="inputModalContainer">
          <form>
            <label htmlFor="">nick:</label>
            <input
              type="text"
              name="nick"
              id="nick"
              placeholder="wprowadź nick ..."
            />
            <label htmlFor="">hasło:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="wprowadź hasło ..."
            />
            <input type="button" value="Zaloguj" />
          </form>
          <div className="btnSingInRemindPassword">
            <p
              className="accessToggleModalShow"
              onClick={(e) => {
                loginModalToggle(e);
                signinModalToggle(e);
              }}
            >
              Rejesteacja
            </p>
            <p
              className="accessToggleModalShow"
              onClick={(e) => {
                loginModalToggle(e);
                rememberPasswordModalToggle(e);
              }}
            >
              Przypomnij hasło
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
