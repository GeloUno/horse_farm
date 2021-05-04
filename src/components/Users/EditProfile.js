import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditProfileFormik from '../Formik/EditProfileFormik';
import { PulseLoader } from 'react-spinners';

const EditProfile = () => {
  const userAuth = useSelector((state) => state.userAction);
  const { user, isLoading, isError } = userAuth;
  const [wasDataSend, setWasDataSend] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLoading && !wasDataSend) {
      setWasDataSend((prev) => {
        return !prev;
      });
    }
    !isLoading && !isError && wasDataSend && history.push('profil');
    return () => {
      setWasDataSend((prev) => {
        return !prev;
      });
    };
  }, [isLoading, isError, wasDataSend]);

  return (
    <div className="contaniner profileContainer editProfileContainer">
      <div className="imapgeProfile">
        {user && user.photoId && (
          <img
            className="image-user imageEditProfile"
            src={user.photoId}
            alt="użytkownik"
          />
        )}
        <div className="profileButtons profileButtonPhoto">
          <button
            className="btn btn-green btn-capitalize 
            btn-editProfile"
          >
            {user && user.photoId && 'Zmień zdjęcie'}
            {(!user || !user.photoId) && 'Dodaj zdjęcie'}
          </button>
        </div>
      </div>
      {isLoading && <PulseLoader size={35} color={'hsla(94, 30%, 43%, 1)'} />}
      {!isLoading && !isError && <EditProfileFormik user={user} />}
    </div>
  );
};

export default EditProfile;
