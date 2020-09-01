import React from 'react';

const Login = () => {
  return (
    <div className="modalContainerCenter">
      <div className="imageModalContainer"></div>
      <div className="inputModalContainer">
        <form>
          <label htmlFor="">nick:</label>
          <input type="text" name="nick" id="nick" />
          <label htmlFor="">nick:</label>
          <input type="password" name="password" id="password" />
          <input type="button" value="submit" />
        </form>
        <div>
          <p>
            nie masz jeszcze konta? <strong>Rejesteacja</strong>
          </p>
          <p>
            nie pamiętasz hasła? <strong>Przypomnij hasło</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
