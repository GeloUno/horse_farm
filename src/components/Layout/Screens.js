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
      <TitleSection title="Atrakcje" />
      <Attractions />
    </>
  );
};
export const OpinionsScreen = () => {
  return (
    <>
      <TitleSection title="Opinia" />
      <Opinions opinion={true} />
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
  userID,
  nick,
  setStartDateAndTimeBooking,
  setEndDateAndTimeBooking,
}) => {
  return (
    <>
      <TitleSection title="Rezerwacja" />
      <MakeBooking
        userID={userID}
        nick={nick}
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
}) => {
  return (
    <>
      <TitleSection title="Galeria" />
      <Gallery
        setDataGalleryImageModal={setDataGalleryImageModal}
        galleryImageModalToggle={galleryImageModalToggle}
        userID={userID}
      />
    </>
  );
};
export const ContactScreen = () => {
  return (
    <>
      <TitleSection title="Kontakt" />
      <Contact />
    </>
  );
};
