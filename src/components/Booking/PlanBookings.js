import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pl from 'date-fns/locale/pl';
import HorizontalScroll from 'react-scroll-horizontal';
import faker from 'faker/locale/pl';
import PlanBookingsDays from './PlanBookingsDays';
import PlanBookingHoures from './PlanBookingHours';

const PlanBookings = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container containerPlanBooking">
      <div className="dateHeader ">
        <div className="monthYearHeader">
          <div className="month">
            <h2>Wrzesień</h2>
          </div>
          <div className="year">2020</div>
          <div className="year">
            <div className="changeMonth changeDateBooking">
              <div className="prevMonth btnChangeDateBooking">
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className="nextMonth btnChangeDateBooking">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="dayHeader">
          <div className="dayNumber">
            <h2>22</h2>
          </div>
          <div className="daysOfWeek">sobota</div>
          <div className="changeDay changeDateBooking">
            <div className="prevDay btnChangeDateBooking">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="nextMonth btnChangeDateBooking">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <PlanBookingsDays />
      <PlanBookingHoures />
      <div>
        <button className="btn btn-green btn-capitalize">rezerwacja</button>
      </div>
    </div>
  );
};

PlanBookings.propTypes = {};

export default PlanBookings;
