import React from 'react';
import MakeBooking from '../components/Booking/MakeBooking';
import TitleSection from '../Layout/TitleSection';

interface IMakeBookingScreenProps {
  setStartDateAndTimeBooking(date: Date): void,
  setEndDateAndTimeBooking(date: Date): void,
}
const MakeBookingScreen: React.FC<IMakeBookingScreenProps> = ({
  setStartDateAndTimeBooking,
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