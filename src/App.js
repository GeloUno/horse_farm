import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import SideBar from './components/Modals/SideBar';
import LoginUser from './components/Modals/LogIn';
import SingUpUser from './components/Modals/SignUp';
import RememberPassword from './components/Modals/RememberPassword';

import GalleryFullScreenImage from './components/Gallery/ImageModal';

import { ShowMobileInfo } from './DevUtility/ShowMobileInfo';
import {
  ConfirmBookingScreen,
  ContactScreen,
  EditProfileScreen,
  GalleryScreen,
  HomeScreen,
  MakeBookingScreen,
  OpinionsScreen,
  PlanBookingsScreen,
  ProfileScreen,
} from './components/Layout/Screens';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [sectionPage, setSectionPage] = useState(null);
  useEffect(() => {
    if (sectionPage) {
      const elementSection = document.querySelector(`.${sectionPage}`);
      elementSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [sectionPage]);

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
    if (!e.target.classList.contains('sideBarBody')) {
      setSideBarShow(!sideBarShow);
      e.preventDefault();
    }
  };
  const loginModalToggle = (e) => {
    // console.log('login Toogle :>> ', e.target.classList);
    if (e.target.classList.contains('accessToggleModalShow')) {
      setLoginModalShow(!loginModalShow);
      e.preventDefault();
    }
  };
  const signinModalToggle = (e) => {
    if (e.target.classList.contains('accessToggleModalShow')) {
      setSinginModalShow(!singinModalShow);
      e.preventDefault();
    }
  };
  const rememberPasswordModalToggle = (e) => {
    if (e.target.classList.contains('accessToggleModalShow')) {
      setRememberPasswordModalShow(!rememberPasswordModalShow);
      e.preventDefault();
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
      <Router basename="/horse_farm">
        <NavBar
          sideBarToggle={sideBarToggle}
          loginModalToggle={loginModalToggle}
          isAuthenticated={isAuthenticated}
          setSectionPage={setSectionPage}
        />
        {sideBarShow && (
          <SideBar
            sideBarToggle={sideBarToggle}
            loginModalToggle={loginModalToggle}
            isAuthenticated={isAuthenticated}
            setSectionPage={setSectionPage}
          />
        )}
        {loginModalShow && (
          <LoginUser
            signinModalToggle={signinModalToggle}
            loginModalToggle={loginModalToggle}
            rememberPasswordModalToggle={rememberPasswordModalToggle}
          />
        )}
        {singinModalShow && (
          <SingUpUser signinModalToggle={signinModalToggle} />
        )}
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
        {/* <Redirect exect from="/horse_farm/" to="/" /> */}
        <Route exect path="/" component={HomeScreen} exact />
        <Route path="/opinia" component={OpinionsScreen} />
        <Route path="/profil" component={ProfileScreen} />
        <Route path="/edycjaprofilu" component={EditProfileScreen} />
        <Route path="/planer" component={PlanBookingsScreen} />
        <Route path="/kontakt" component={ContactScreen} />
        <Route
          path="/rezerwacja"
          component={() => (
            <MakeBookingScreen
              userID={user.user.userID}
              nick={user.user.nick}
              setStartDateAndTimeBooking={setStartDateAndTimeBooking}
              setEndDateAndTimeBooking={setEndDateAndTimeBooking}
            />
          )}
        />

        <Route
          path="/potwierdzenie_rezerwacji"
          component={() => (
            <ConfirmBookingScreen
              user={user}
              startDateAndTimeBooking={startDateAndTimeBooking}
              endDateAndTimeBooking={endDateAndTimeBooking}
            />
          )}
        />
        <Route
          path="/galeria"
          component={() => (
            <GalleryScreen
              setDataGalleryImageModal={setDataGalleryImageModal}
              galleryImageModalToggle={galleryImageModalToggle}
              userID={user.user.userID}
            />
          )}
        />
        {/* <ShowMobileInfo /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
