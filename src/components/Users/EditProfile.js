import React, { useState } from 'react';

const EditProfile = ({
  nick = 'Ami',
  firstName = 'Amelka',
  lastName = 'Nowakbardzodługienazwisko',
  email = 'supertajny@gmail.com',
  phone = '501 234 567',
  opinion = undefined,
}) => {
  const [user, setUser] = useState({
    nick,
    firstName,
    lastName,
    email,
    phone,
    opinion,
  });

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="contaniner profileContainer editProfileContainer">
      <div className="imapgeProfile">
        <img
          className={'image-user'}
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="użytkownik"
        />
        <div className="profileButtons">
          <button className="btn btn-green btn-capitalize">Edytuj</button>
        </div>
      </div>
      <form className="userProfile editUserProfile">
        <div>
          <p>nick:</p>
          <input
            onChange={(e) => {
              onChangeUser(e);
            }}
            placeholder="wprowadz nick ..."
            type="text"
            name="nick"
            value={user.nick}
            key={nick}
          />
        </div>
        <div>
          <p>imię:</p>
          <input
            onChange={(e) => {
              onChangeUser(e);
            }}
            placeholder="wprowadz imię ..."
            type="text"
            name="firstName"
            value={user.firstName}
            key={firstName}
          />
        </div>
        <div>
          <p>nazwisko:</p>
          <input
            onChange={(e) => {
              onChangeUser(e);
            }}
            placeholder="wprowadz nazwisko ..."
            type="text"
            name="lastName"
            value={user.lastName}
            key={lastName}
          />
        </div>
        <div>
          <p>email:</p>
          <input
            onChange={(e) => {
              onChangeUser(e);
            }}
            placeholder="wprowadz email ..."
            type="text"
            name="email"
            value={user.email}
            key={email}
          />
        </div>
        <div>
          <p>tel:</p>
          <input
            onChange={(e) => {
              onChangeUser(e);
            }}
            placeholder="wprowadz tel ..."
            type="text"
            name="phone"
            value={user.phone}
            key={phone}
          />
        </div>
        <div>
          <p>opinia:</p>
          <textarea
            className="editUserOpinionTextArea"
            onChange={(e) => {
              onChangeUser(e);
            }}
            placeholder="Tu możesz wystawić opinię o stadninie. Wystawiając opinię WYRAŻSZ ZGODĘ na upoblicznienie swojego wizerunku. Zawsze możesz edytować lub wykasować opinię. Usunięcie opini skutkuje usunięciem wizerunku z miejsca publicznego strony. Jeśli nie jesteś pełnoletni o zgodę zapytaj osoby dorosłe: Rodzica, Opiekuna ..."
            type="text"
            rows="10"
            name="opinion"
            value={user.opinion}
          />
        </div>
      </form>
      <div className="profileButtons btn-editProfileButton">
        <button className="btn btn-green btn-capitalize">zapisz</button>
      </div>
    </div>
  );
};

export default EditProfile;
