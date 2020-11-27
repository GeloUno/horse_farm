import React, { useState } from 'react';
import { DEVuser } from '../../DevUtility/user';
import EditProfileFormik from '../Formik/EditProfileFormik';

const EditProfile = ({
  nick = DEVuser.nick,
  firstName = DEVuser.firstName,
  lastName = DEVuser.lastName,
  email = DEVuser.email,
  phone = DEVuser.phone,
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
      <EditProfileFormik user={user} />
    </div>
  );
};

export default EditProfile;
