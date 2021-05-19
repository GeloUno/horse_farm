import React, { useMemo } from 'react';
import ConfirmBooking from '../components/Booking/ConfirmBooking';
import MakeBooking from '../components/Booking/MakeBooking';
import PlanBookings from '../components/Booking/PlanBookings';
import Gallery from '../components/Gallery/Images';
import EditProfile from '../components/Users/EditProfile';
import Profile from '../components/Users/Profile';
import Attractions from './Attractions';
import Contact from './Contact';
import Header from './Header';
import Opinions from './Opinions';
import TitleSection from './TitleSection';

export const HomeScreen: React.FC = () => {


  const renderOnlyOnceHomeScreen = useMemo(() =>
    <>
      <Header />
      <AttractionsScreen />
      <OpinionsScreen />
      <ContactScreen />
    </>
    ,
    [])

  return (
    <>
      {renderOnlyOnceHomeScreen}
    </>
  );
};

export const AttractionsScreen = () => {
  return (
    <>
      {console.log(`Render A`)}
      <TitleSection
        title="Atrakcje"
        addClassPage="attractions" />
      <Attractions />
    </>
  );
};

export const OpinionsScreen = () => {
  return (
    <>
      {console.log(`Render B`)}
      <TitleSection
        title="Opinia"
        addClassPage="opinions" />
      <Opinions
      />
    </>
  );
};

export const ContactScreen = () => {
  return (
    <>
      <TitleSection
        title="Kontakt"
        addClassPage="contact" />
      <Contact />
    </>
  );
};

export const ProfileScreen = () => {
  return (
    <>
      <TitleSection
        title="Profil" />
      <Profile />
    </>
  );
};
export const EditProfileScreen = () => {
  return (
    <>
      <TitleSection
        title="Edycja profilu" />
      <EditProfile />
    </>
  );
};
export const PlanBookingsScreen = () => {
  return (
    <>
      <TitleSection
        title="Planer" />
      <PlanBookings />
    </>
  );
};
export const MakeBookingScreen = ({
  //@ts-ignore
  setStartDateAndTimeBooking,
  //@ts-ignore
  setEndDateAndTimeBooking,
}) => {
  return (
    <>
      <TitleSection title="Rezerwacja" />
      <MakeBooking
        setStartDateAndTimeBooking={setStartDateAndTimeBooking}
        setEndDateAndTimeBooking={setEndDateAndTimeBooking}
      />
    </>
  );
};
export const ConfirmBookingScreen = ({
  //@ts-ignore
  user,
  //@ts-ignore
  startDateAndTimeBooking,
  //@ts-ignore
  endDateAndTimeBooking,
}) => {
  return (
    <>
      <TitleSection title="Potwierdzenie rezerwacji" />
      <ConfirmBooking
        //@ts-ignore
        user={user}
        startDateAndTimeBooking={startDateAndTimeBooking}
        endDateAndTimeBooking={endDateAndTimeBooking}
      />
    </>
  );
};
export const GalleryScreen = ({
  //@ts-ignore
  userID,
  //@ts-ignore
  setDataGalleryImageModal,
  //@ts-ignore
  galleryImageModalToggle,
  //@ts-ignore
  isGalleryImageModalShow,
  //@ts-ignore
  isScrollToAddComment,
  //@ts-ignore
  setisScrollToAddComment,

}) => {
  return (
    <>
      <TitleSection title="Galeria" />
      <Gallery
        setDataGalleryImageModal={setDataGalleryImageModal}
        galleryImageModalToggle={galleryImageModalToggle}
        isGalleryImageModalShow={isGalleryImageModalShow}
        userID={userID}
        //@ts-ignore
        isScrollToAddComment={isScrollToAddComment}
        setisScrollToAddComment={setisScrollToAddComment}
      />
    </>
  );
};
