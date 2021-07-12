import React from 'react';
import { PlanBookingHoursUsersList } from './PlanBookingHoursUsersList';
import { IDevBookingData } from '../../DevUtility/booking';

interface PlanBookingHouresProps {
  firstHourBooking?: number,
  lastHourBooking?: number,
  BookingData: Array<IDevBookingData>,
  bookingDay: Date,
}


const PlanBookingHoures: React.FC<PlanBookingHouresProps> = ({
  firstHourBooking = 8,
  lastHourBooking = 21,
  BookingData,
  bookingDay,
}) => {
  const dayBookingData = BookingData.filter((dataBooking) => {
    const day = new Date(bookingDay).getDate();
    const dayCompareFromDataBooking = dataBooking.hourBooking.getDate();
    return day === dayCompareFromDataBooking;
  });
  return (
    <div className="clendaryHourBookingBody">
      <div className="hourBookingBody">
        {PlanBookingHoursUsersList(
          firstHourBooking,
          lastHourBooking + 1,
          dayBookingData
        )}
      </div>
    </div>
  );
};

export default PlanBookingHoures;
