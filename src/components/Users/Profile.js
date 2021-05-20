import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const userAuth = useSelector((state) => state.userAction);
  const { user } = userAuth;

  return (
    <div className="contaniner profileContainer">
      <div className="imapgeProfile">
        {user && user.photoId && (
          <img className={'image-user'} src={user.photoId} alt="użytkownik" />
        )}
      </div>
      <div className="userProfile">
        <div>
          <p>nick:</p>
          <h2>{user.nick || ''}</h2>
        </div>
        <div>
          <p>imię:</p>
          <h2>{user.firstName}</h2>
        </div>
        <div>
          <p>nazwisko:</p>
          <h2>{user.lastName}</h2>
        </div>
        <div>
          <p>email:</p>
          <h2>{user.email}</h2>
        </div>
        <div>
          <p>tel:</p>
          <h2>{user.phone}</h2>
        </div>
      </div>
      <div className="profileButtons">
        <Link to="edycjaprofilu">
          <button className="btn btn-green btn-capitalize">edycja</button>
        </Link>
        <Link to="planer">
          <button className="btn btn-green btn-capitalize">planer</button>
        </Link>
        <Link to="rezerwacja">
          <button className="btn btn-green btn-capitalize">rezerwacja</button>
        </Link>
      </div>
      <div className="profileButtons profileRemove">
        <Link to="usunprofil">
          <button className="btn btn-red btn-capitalize">Usuń profil</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
