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
import LoginUser from './components/Modals/LogInUser';
import SingUpUser from './components/Modals/SignUpUser';
import RememberPassword from './components/Modals/RememberPassword';
import Profile from './components/Users/Profile';

function App() {
  const [sideBarShow, setSideBarShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [singinModalShow, setSinginModalShow] = useState(false);
  const [rememberPasswordModalShow, setRememberPasswordModalShow] = useState(
    false
  );

  /* FIXME: what will be better multi function ore one  ?? */

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
      <Header />
      <TitleSection title="Atrakcje" />
      <Attractions />
      <TitleSection title="Opinia" />
      <Opinions opinion={true} />
      <TitleSection title="kontakt" />
      <Contact />
      <TitleSection title="Profil" />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
