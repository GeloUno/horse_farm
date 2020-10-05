import React from 'react';
import PropTypes from 'prop-types';

const PlanBookings = (props) => {
  return (
    <div className="container containerPlanBooking">
      <div className="dateHeader ">
        <div className="monthYearHeader">
          <div className="month">wrzesien </div>
          <div className="year">2020</div>
        </div>
        <div className="dayHeader">
          <div className="dayNumber">22</div>
          <div className="daysOfWeek">sobota</div>
        </div>
      </div>
      <div className="clendaryHouerBookingBody">
        <div className="clendaryBooking"> kalendarz</div>
        <div className="houerBooking">godziny</div>
      </div>
      <div>
        <button className="btn btn-green btn-capitalize">rezerwacja</button>
      </div>
    </div>
  );
};

PlanBookings.propTypes = {};

export default PlanBookings;
