import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './Layout/NavBar';
import Footer from './Layout/Footer';
import SideBar from './components/Modals/SideBar';
import LoginUser from './components/Modals/LogIn';
import SingUpUser from './components/Modals/SignUp';
import ResetPassword from './components/Modals/ResetPassword';
import GalleryFullScreenImage from './components/Gallery/ImageModal';
import {
  HomeScreen,
} from './Layout/Screens';

// import { getFirebase, onAuthChange } from './firebase';
import PrivateRoute from './router/PrivateRoute';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './utility/materialui';
import {
  ProfileScreen,
  EditProfileScreen,
  ConfirmDeleteUser,
  PlanBookingsScreen,
  MakeBookingScreen,
  ConfirmBookingScreen,
  GalleryScreen,
  PageNotFound,
  // LoginUser,
  // SingUpUser,
  // ResetPassword,
  // GalleryFullScreenImage,
} from './router/LazyComponents';
import { Loading } from './components/Loading';


function App() {

  const [sectionPage, setSectionPage] = useState(null);

  const scrollToSection = (section) => {
    const elementSection = document.querySelector(`.${section}`);
    elementSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  // useEffect(() => {
  //   getFirebase();
  //   onAuthChange();
  // }, []);

  useEffect(() => {
    if (sectionPage) {
      scrollToSection(sectionPage);
    }
  }, [sectionPage]);


  const [sideBarShow, setSideBarShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [singinModalShow, setSinginModalShow] = useState(false);
  const [resetPasswordModalShow, setResetPasswordModalShow] = useState(false);
  const [isGalleryImageModalShow, setIsGalleryImageModalShow] = useState(false);
  const [dataGalleryImageModal, setDataGalleryImageModal] = useState(undefined);
  const [startDateAndTimeBooking, setStartDateAndTimeBooking] = useState(
    undefined
  );
  const [isScrollToAddComment, setisScrollToAddComment] = useState(false);
  const [endDateAndTimeBooking, setEndDateAndTimeBooking] = useState(undefined);

  const sideBarToggle = (e) => {
    if (!e.target.classList.contains('sideBarBody')) {
      setSideBarShow(!sideBarShow);
      e.preventDefault();
    }
  };
  const loginModalToggle = (e) => {

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
  const resetPasswordModalToggle = (e) => {
    if (e.target.classList.contains('accessToggleModalShow')) {
      setResetPasswordModalShow(!resetPasswordModalShow);
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
      <ThemeProvider theme={theme}>
        <Router basename="/horse_farm">
          <NavBar
            sideBarToggle={sideBarToggle}
            loginModalToggle={loginModalToggle}
            setSectionPage={setSectionPage}
          />
          {sideBarShow && (
            <SideBar
              sideBarToggle={sideBarToggle}
              loginModalToggle={loginModalToggle}
              setSectionPage={setSectionPage}
            />
          )}
          {loginModalShow && (
            <LoginUser
              signinModalToggle={signinModalToggle}
              loginModalToggle={loginModalToggle}
              resetPasswordModalToggle={resetPasswordModalToggle}
              setLoginModalShow={setLoginModalShow}
            />
          )}
          {singinModalShow && (
            <SingUpUser
              signinModalToggle={signinModalToggle}
              loginModalToggle={loginModalToggle}
              setSinginModalShow={setSinginModalShow}
            />
          )}
          {resetPasswordModalShow && (
            <ResetPassword
              resetPasswordModalToggle={resetPasswordModalToggle}
              loginModalToggle={loginModalToggle}
              setResetPasswordModalShow={setResetPasswordModalShow}
            />
          )}
          {isGalleryImageModalShow && (
            <GalleryFullScreenImage
              isGalleryImageModalShow={isGalleryImageModalShow}
              dataGalleryImageModal={dataGalleryImageModal}
              galleryImageModalToggle={galleryImageModalToggle}
              // userID={2}
              isScrollToAddComment={isScrollToAddComment}
              setisScrollToAddComment={setisScrollToAddComment}
            />
          )}

          <Suspense fallback={<Loading />}>
            <Switch>
              <PrivateRoute
                setLoginModalShow={setLoginModalShow}
                path="/profil"
                component={ProfileScreen}
                exact
              />
              <PrivateRoute
                setLoginModalShow={setLoginModalShow}
                path="/edycjaprofilu"
                component={EditProfileScreen}
                exact
              />
              <PrivateRoute
                path="/usunprofil"
                component={ConfirmDeleteUser}
                exact
              />
              <PrivateRoute
                setLoginModalShow={setLoginModalShow}
                path="/planer"
                component={PlanBookingsScreen}
                exact
              />
              <PrivateRoute
                setLoginModalShow={setLoginModalShow}
                path="/rezerwacja"
                component={() => (
                  <MakeBookingScreen
                    setStartDateAndTimeBooking={setStartDateAndTimeBooking}
                    setEndDateAndTimeBooking={setEndDateAndTimeBooking}
                    exact
                  />
                )}
              />

              <PrivateRoute
                setLoginModalShow={setLoginModalShow}
                path="/potwierdzenie_rezerwacji"
                component={() => (
                  <ConfirmBookingScreen
                    startDateAndTimeBooking={startDateAndTimeBooking}
                    endDateAndTimeBooking={endDateAndTimeBooking}
                    exact
                  />
                )}
              />
              <Route
                path="/galeria"
                component={() => (
                  <GalleryScreen
                    isGalleryImageModalShow={isGalleryImageModalShow}
                    setDataGalleryImageModal={setDataGalleryImageModal}
                    galleryImageModalToggle={galleryImageModalToggle}
                    userID={2}
                    isScrollToAddComment={isScrollToAddComment}
                    setisScrollToAddComment={setisScrollToAddComment}
                    exact
                  />
                )}
              />
              <Route path="/" component={HomeScreen} exact />
              <Route component={() => <PageNotFound />} />
            </Switch>
          </Suspense>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
