import React from 'react';

const Profile = ({
  nick = 'Ami',
  firstName = 'Amelka',
  lastName = 'Nowakbardzodługienazwisko',
  email = 'supertajny@gmail.com',
  phone = '501 234 567',
}) => {
  return (
    <div className="contaniner profileContainer">
      <div className="imapgeProfile">
        <img
          className={'image-user'}
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="użytkownik"
        />
      </div>
      <div className="userProfile">
        <div>
          <p>nick:</p>
          <h2>{nick}</h2>
        </div>
        <div>
          <p>imię:</p>
          <h2>{firstName}</h2>
        </div>
        <div>
          <p>nazwisko:</p>
          <h2>{lastName}</h2>
        </div>
        <div>
          <p>email:</p>
          <h2>{email}</h2>
        </div>
        <div>
          <p>tel:</p>
          <h2>{phone}</h2>
        </div>
      </div>
      <div className="profileButtons">
        <button className="btn btn-green btn-capitalize">edycja</button>
        <button className="btn btn-green btn-capitalize">planer</button>
        <button className="btn btn-green btn-capitalize">rezerwacja</button>
      </div>
    </div>
  );
};

export default Profile;
