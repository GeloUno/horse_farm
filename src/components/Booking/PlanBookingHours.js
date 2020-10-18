import React from 'react';
import PropTypes from 'prop-types';
import { PlanBookingHoursUsersList } from './PlanBookingHoursUsersList';

const PlanBookingHoures = ({
  firstHourBooking,
  lastHourBooking,
  BookingData,
  bookingDay,
}) => {
  const dayBookingData = BookingData.filter((dataBooking) => {
    const day = new Date(bookingDay).getDate();
    const dayCompareFromDataBooking = dataBooking.hourBooking.getDate();
    return day === dayCompareFromDataBooking;
  });
  return (
    <div className="clendaryHouerBookingBody">
      <div className="houerBookingBody">
        {PlanBookingHoursUsersList(
          firstHourBooking,
          lastHourBooking + 1,
          dayBookingData
        )}
      </div>
    </div>
  );
};

PlanBookingHoures.defaultProps = {
  firstHourBooking: 8,
  lastHourBooking: 21,
};
PlanBookingHoures.propTypes = {
  firstHourBooking: PropTypes.number.isRequired,
  lastHourBooking: PropTypes.number.isRequired,
};

export default PlanBookingHoures;
