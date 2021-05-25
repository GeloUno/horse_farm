import React from 'react';
import MakeBooking from '../components/Booking/MakeBooking';
import TitleSection from '../Layout/TitleSection';

const MakeBookingScreen = ({
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
        setEndDateAndTimeBooking={setEndDateAndTimeBooking} />
    </>
  );
};
export default MakeBookingScreen