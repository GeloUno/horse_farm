import React from 'react';
import SigninHorseImg from '../../assets/SigninHorse.png';

const SingUpUser = ({ signinModalToggle }) => {
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        signinModalToggle(e);
      }}
    >
      <div className="signinModal">
        <div className="imageModalContainer">
          <img className="modalImage" src={SigninHorseImg} alt="Konik" />
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
            <label htmlFor="">powtórz hasło:</label>
            <input
              type="password"
              name="password-repeat"
              id="password-repeat"
              placeholder="powtórz hasło ..."
            />
            <label htmlFor="">email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="wprowadź email ..."
            />
            <button
              type="submit"
              className="btn btn-brown btn-capitalize btn-radius btn-signup"
            >
              Rejestracja
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUpUser;
