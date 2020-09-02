import React from 'react';

const RememberPassword = ({ rememberPasswordModalToggle }) => {
  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        rememberPasswordModalToggle(e);
      }}
    >
      <div className="rememberPasswordModal">
        <div className="textModalContainer">
          <h2>
            Proszę podać e-mail w celu resetowania hasła. Instrukcja
            przywracania hasła będzie zawarta w wiadomości e-mail
          </h2>
        </div>
        <div className="inputModalContainer">
          <form>
            <label htmlFor="">email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="wprowadź email ..."
            />
            <button
              type="submit"
              className="btn btn-brown btn-capitalize btn-radius btn-rememberPassword"
            >
              wyslij
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RememberPassword;
