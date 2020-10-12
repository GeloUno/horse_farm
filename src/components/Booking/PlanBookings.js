import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import PlanBookingsDays from './PlanBookingsDays';
import PlanBookingHoures from './PlanBookingHours';

const PlanBookings = (props) => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState(
    moment(bookingDate).daysInMonth()
  );

  useEffect(() => {
    setDaysInMonth(moment(bookingDate).daysInMonth());
  }, [bookingDate]);
  return (
    <div className="container containerPlanBooking">
      <div className="dateHeader ">
        <div className="monthYearHeader">
          <div className="month">
            <h2>
              <Moment format="MMMM">{bookingDate}</Moment>
            </h2>
          </div>
          <div className="year">
            {' '}
            <Moment format="YYYY">{bookingDate}</Moment>
          </div>
          <div className="year">
            <div className="changeMonth changeDateBooking">
              <div
                className="prevMonth btnChangeDateBooking"
                onClick={() => {
                  setBookingDate(moment(bookingDate).subtract(1, 'months'));
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </div>
              <div
                className="nextMonth btnChangeDateBooking"
                onClick={() => {
                  setBookingDate(moment(bookingDate).add(1, 'months'));
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="dayHeader">
          <div className="dayNumber">
            <h2>
              <Moment format="D">{bookingDate}</Moment>
            </h2>
          </div>
          <div className="daysOfWeek">
            {' '}
            <Moment format="dddd">{bookingDate}</Moment>
          </div>
          <div className="changeDay changeDateBooking">
            <div
              className="prevDay btnChangeDateBooking"
              onClick={() => {
                setBookingDate(moment(bookingDate).subtract(1, 'days'));
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </div>
            <div
              className="nextMonth btnChangeDateBooking"
              onClick={() => {
                setBookingDate(moment(bookingDate).add(1, 'days'));
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <PlanBookingsDays
        daysInMonth={daysInMonth}
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
      />
      <PlanBookingHoures />
      <div className="reservedButtonLink">
        <button className="btn btn-green btn-capitalize">rezerwacja</button>
      </div>
    </div>
  );
};

PlanBookings.propTypes = {};

export default PlanBookings;
