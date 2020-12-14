import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import SideBar from './components/Modals/SideBar';
import LoginUser from './components/Modals/LogIn';
import SingUpUser from './components/Modals/SignUp';
import ResetPassword from './components/Modals/ResetPassword';

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
import PageNotFound from './components/Layout/PageNotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { getCurrentUser, getFirebase, onAuthChange } from './firebase';
import PrivateRoute from './routing/PrivateRoute';

// export const ResetPasswordContext = React.createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userAuth = useSelector((state) => state.userAction);
  const { idToken, userState } = userAuth;

  //  const { idToken } = userAuth;

  const [cookies] = useCookies(['idToken']);

  const [sectionPage, setSectionPage] = useState(null);

  const scrollToSection = (section) => {
    const elementSection = document.querySelector(`.${section}`);
    elementSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  useEffect(() => {
    getFirebase();
    onAuthChange();
    // return () => {

    // }
  }, []);

  useEffect(() => {
    if (sectionPage) {
      scrollToSection(sectionPage);
    }
  }, [sectionPage]);

  useEffect(() => {
    console.log('getCurrentUser', getCurrentUser());

    cookies.idToken ? setIsAuthenticated(true) : setIsAuthenticated(false);

    userState &&
      setUser({
        name: userState.name,
        id: userState.id,
      });
    return () => {
      // cleanup;
    };
  });

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
  // ANCHOR: set user ID after login to DB
  const [user, setUser] = useState(null); //ANCHOR: on prod should be null, set user id from DB

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
            resetPasswordModalToggle={resetPasswordModalToggle}
            setLoginModalShow={setLoginModalShow}
            setUser={setUser}
          />
        )}
        {singinModalShow && (
          <SingUpUser
            signinModalToggle={signinModalToggle}
            loginModalToggle={loginModalToggle}
          />
        )}
        {resetPasswordModalShow && (
          // <ResetPasswordContext.Provider
          //   value={{
          //     sideBarShow,
          //     loginModalShow,
          //     singinModalShow,
          //     resetPasswordModalShow,
          //   }}
          // >
          <ResetPassword
            resetPasswordModalToggle={resetPasswordModalToggle}
            loginModalToggle={loginModalToggle}
          />
          // </ResetPasswordContext.Provider>
        )}
        {isGalleryImageModalShow && (
          <GalleryFullScreenImage
            isGalleryImageModalShow={isGalleryImageModalShow}
            dataGalleryImageModal={dataGalleryImageModal}
            galleryImageModalToggle={galleryImageModalToggle}
            userID={2}
            isScrollToAddComment={isScrollToAddComment}
            setisScrollToAddComment={setisScrollToAddComment}
          />
        )}
        {/* <Redirect exect from="/horse_farm/" to="/" /> */}
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
            setLoginModalShow={setLoginModalShow}
            path="/planer"
            component={PlanBookingsScreen}
            exact
          />
          {/* <Route path="/opinia" component={OpinionsScreen} /> */}
          {/* <Route path="/kontakt" component={ContactScreen} /> */}
          <PrivateRoute
            setLoginModalShow={setLoginModalShow}
            path="/rezerwacja"
            component={() => (
              <MakeBookingScreen
                userID={2}
                nick={'Ami'}
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
                user={user}
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
        {/* <ShowMobileInfo /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
