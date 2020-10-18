import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import NavBar from './components/Layout/NavBar';
import Attractions from './components/Layout/Attractions';
import TitleSection from './components/Layout/TitleSection';
import Opinions from './components/Layout/Opinions';
import Contact from './components/Layout/Contact';
import Footer from './components/Layout/Footer';
import SideBar from './components/Modals/SideBar';
import LoginUser from './components/Modals/LogIn';
import SingUpUser from './components/Modals/SignUp';
import RememberPassword from './components/Modals/RememberPassword';
import Profile from './components/Users/Profile';
import EditProfile from './components/Users/EditProfile';
import Gallery from './components/Gallery/Images';
import GalleryFullScreenImage from './components/Gallery/ImageModal';
import MakeBooking from './components/Booking/MakeBooking';
import ConfirmBooking from './components/Booking/ConfirmBooking';
import PlanBookings from './components/Booking/PlanBookings';
import { ShowMobileInfo } from './DevUtility/ShowMobileInfo';

function App() {
  const [sideBarShow, setSideBarShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [singinModalShow, setSinginModalShow] = useState(false);
  const [rememberPasswordModalShow, setRememberPasswordModalShow] = useState(
    false
  );
  const [isGalleryImageModalShow, setIsGalleryImageModalShow] = useState(false);
  const [dataGalleryImageModal, setDataGalleryImageModal] = useState(undefined);
  const [startDateAndTimeBooking, setStartDateAndTimeBooking] = useState(
    undefined
  );
  const [endDateAndTimeBooking, setEndDateAndTimeBooking] = useState(undefined);
  // ANCHOR: set user ID after login to DB
  const [user, setUser] = useState({ user: { userID: 2, nick: 'Ami' } }); //ANCHOR: on prod should be null, set user id from DB

  /* ANCHOR: what will be better multi function ore one  ?? */

  const sideBarToggle = (e) => {
    e.preventDefault();
    if (!e.target.classList.contains('sideBarBody')) {
      setSideBarShow(!sideBarShow);
    }
  };
  const loginModalToggle = (e) => {
    e.preventDefault();
    // console.log('login Toogle :>> ', e.target.classList);
    if (e.target.classList.contains('accessToggleModalShow')) {
      setLoginModalShow(!loginModalShow);
    }
  };
  const signinModalToggle = (e) => {
    e.preventDefault();
    // console.log('signin Toggle :>> ', e.target.classList);
    if (e.target.classList.contains('accessToggleModalShow')) {
      setSinginModalShow(!singinModalShow);
    }
  };
  const rememberPasswordModalToggle = (e) => {
    e.preventDefault();
    // console.log('remeberPassword Toggle :>> ', e.target.classList);
    if (e.target.classList.contains('accessToggleModalShow')) {
      setRememberPasswordModalShow(!rememberPasswordModalShow);
    }
  };

  const galleryImageModalToggle = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('accessToggleModalShow')) {
      setIsGalleryImageModalShow(!isGalleryImageModalShow);
      isGalleryImageModalShow
        ? document.body.classList.remove('lockScrollInBody')
        : document.body.classList.add('lockScrollInBody');
    }
  };

  return (
    <div className="App">
      <NavBar
        sideBarToggle={sideBarToggle}
        loginModalToggle={loginModalToggle}
      />
      {sideBarShow && <SideBar sideBarToggle={sideBarToggle} />}
      {loginModalShow && (
        <LoginUser
          signinModalToggle={signinModalToggle}
          loginModalToggle={loginModalToggle}
          rememberPasswordModalToggle={rememberPasswordModalToggle}
        />
      )}
      {singinModalShow && <SingUpUser signinModalToggle={signinModalToggle} />}
      {rememberPasswordModalShow && (
        <RememberPassword
          rememberPasswordModalToggle={rememberPasswordModalToggle}
        />
      )}
      {isGalleryImageModalShow && (
        <GalleryFullScreenImage
          dataGalleryImageModal={dataGalleryImageModal}
          galleryImageModalToggle={galleryImageModalToggle}
          userID={user.user.userID}
        />
      )}
      <Header />
      <TitleSection title="Atrakcje" />
      <Attractions />
      <TitleSection title="Opinia" />
      <Opinions opinion={true} />
      <TitleSection title="kontakt" />
      <Contact />
      <TitleSection title="Profil" />
      <Profile />
      <TitleSection title="Edycja profilu" />
      <EditProfile />
      <TitleSection title="Galeria" />
      <Gallery
        setDataGalleryImageModal={setDataGalleryImageModal}
        galleryImageModalToggle={galleryImageModalToggle}
        userID={user.user.userID}
      />
      <TitleSection title="Rrezerwacja" />
      <MakeBooking
        userID={user.user.userID}
        nick={user.user.nick}
        setStartDateAndTimeBooking={setStartDateAndTimeBooking}
        setEndDateAndTimeBooking={setEndDateAndTimeBooking}
      />
      <TitleSection title="Potwierdzenie rezerwacji" />
      <ConfirmBooking
        user={user}
        startDateAndTimeBooking={startDateAndTimeBooking}
        endDateAndTimeBooking={endDateAndTimeBooking}
      />
      <TitleSection title="Planer" />
      <PlanBookings />
      <ShowMobileInfo />
      <Footer />
    </div>
  );
}

export default App;
