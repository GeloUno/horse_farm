import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker/locale/pl';
import { PlanBookingHoursByUsers } from './PlanBookingHoursByUsers';

const PlanBookingHoures = ({ firstHourBooking, lastHourBooking }) => {
  return (
    <div className="clendaryHouerBookingBody">
      <div className="houerBookingBody">
        {PlanBookingHoursByUsers(firstHourBooking, lastHourBooking + 1)}
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
