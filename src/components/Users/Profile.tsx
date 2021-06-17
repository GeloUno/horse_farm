import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';


const Profile: React.FC = () => {
  const userAuth = useSelector((state: RootState) => state.userAction);
  const { user } = userAuth;

  return (
    <div className="contaniner profileContainer" data-testid='profileContainer'>
      <div className="imageProfile" data-testid='imageProfile'>
        {user && user.photoId && (
          <img className={'image-user'} src={user.photoId} alt="użytkownik" data-testid='imageProfileSrc' />
        )}
      </div>
      <div className="userProfile" data-testid='userProfile'>
        <div>
          <p>nick:</p>
          <h2 data-testid='nickProfile'>{user.nick || ''}</h2>
        </div>
        <div>
          <p>imię:</p>
          <h2 data-testid='firstNameProfile'>{user.firstName}</h2>
        </div>
        <div>
          <p>nazwisko:</p>
          <h2 data-testid='lastNameProfile'>{user.lastName}</h2>
        </div>
        <div>
          <p>email:</p>
          <h2 data-testid='emailProfile'>{user.email}</h2>
        </div>
        <div>
          <p>tel:</p>
          <h2 data-testid='phoneProfile'>{user.phone}</h2>
        </div>
      </div>
      <div className="profileButtons">
        <Link to="edycjaprofilu" data-testid='editionProfileLink'>
          <button className="btn btn-green btn-capitalize">edycja</button>
        </Link>
        <Link to="planer" data-testid='schemaBookingProfileLink'>
          <button className="btn btn-green btn-capitalize">planer</button>
        </Link>
        <Link to="rezerwacja" data-testid='bookingProfileLink'>
          <button className="btn btn-green btn-capitalize">rezerwacja</button>
        </Link>
      </div>
      <div className="profileButtons profileRemove">
        <Link to="usunprofil" data-testid='removeProfileLink'>
          <button className="btn btn-red btn-capitalize">Usuń profil</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
