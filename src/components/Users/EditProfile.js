import React from 'react';
import { useSelector } from 'react-redux';
import EditProfileFormik from '../Formik/EditProfileFormik';

const EditProfile = () =>
  //   {
  //   nick = DEVuser.nick,
  //   firstName = DEVuser.firstName,
  //   lastName = DEVuser.lastName,
  //   email = DEVuser.email,
  //   phone = DEVuser.phone,
  //   opinion = undefined,
  // }
  {
    // const [user, setUser] = useState({
    //   nick,
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   opinion,
    // });

    const userAuth = useSelector((state) => state.userAction);
    const { user } = userAuth;
    // const userData = {
    //   nick: userData.name || null,
    //   firstName: userData.firstName || null,
    //   lastName: userData.lastName || null,
    //   email: userData.email || null,
    //   phone: userData.phone || null,
    //   opinion: userData.opinion || null,
    // };
    // const onChangeUser = (e) => {
    //   setUser({ ...user, [e.target.name]: e.target.value });
    // };
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
          <div className="profileButtons">
            <button
              className="btn btn-green btn-capitalize 
btn-editProfile"
            >
              {user && user.photoId && 'Zmień zdjęcie'}
              {(!user || !user.photoId) && 'Dodaj zdjęcie'}
            </button>
          </div>
        </div>
        <EditProfileFormik user={user} />
      </div>
    );
  };

export default EditProfile;
