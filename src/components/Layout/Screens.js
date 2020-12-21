import React from 'react';
import ConfirmBooking from '../Booking/ConfirmBooking';
import MakeBooking from '../Booking/MakeBooking';
import PlanBookings from '../Booking/PlanBookings';
import Gallery from '../Gallery/Images';
import EditProfile from '../Users/EditProfile';
import Profile from '../Users/Profile';
import Attractions from './Attractions';
import Contact from './Contact';
import Header from './Header';
import Opinions from './Opinions';
import TitleSection from './TitleSection';

export const HomeScreen = () => {
  return (
    <>
      <Header />
      <AttractionsScreen />
      <OpinionsScreen />
      <ContactScreen />
    </>
  );
};

export const AttractionsScreen = () => {
  return (
    <>
      <TitleSection title="Atrakcje" addClassPage="attractions" />
      <Attractions />
    </>
  );
};

export const OpinionsScreen = () => {
  return (
    <>
      <TitleSection title="Opinia" addClassPage="opinions" />
      <Opinions opinion={true} />
    </>
  );
};

export const ContactScreen = () => {
  return (
    <>
      <TitleSection title="Kontakt" addClassPage="contact" />
      <Contact />
    </>
  );
};

export const ProfileScreen = () => {
  return (
    <>
      <TitleSection title="Profil" />
      <Profile />
    </>
  );
};
export const EditProfileScreen = () => {
  return (
    <>
      <TitleSection title="Edycja profilu" />
      <EditProfile />
    </>
  );
};
export const PlanBookingsScreen = () => {
  return (
    <>
      <TitleSection title="Planer" />
      <PlanBookings />
    </>
  );
};
export const MakeBookingScreen = ({
  setStartDateAndTimeBooking,
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
  user,
  startDateAndTimeBooking,
  endDateAndTimeBooking,
}) => {
  return (
    <>
      <TitleSection title="Potwierdzenie rezerwacji" />
      <ConfirmBooking
        user={user}
        startDateAndTimeBooking={startDateAndTimeBooking}
        endDateAndTimeBooking={endDateAndTimeBooking}
      />
    </>
  );
};
export const GalleryScreen = ({
  userID,
  setDataGalleryImageModal,
  galleryImageModalToggle,
  isGalleryImageModalShow,
  isScrollToAddComment,
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
        isScrollToAddComment={isScrollToAddComment}
        setisScrollToAddComment={setisScrollToAddComment}
      />
    </>
  );
};
