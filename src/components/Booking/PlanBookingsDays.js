import React from 'react';
import PropTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal';
import moment from 'moment';
import Moment from 'react-moment';

const listDaysInMonth = (daysInMonth, bookingDate, setBookingDate) => {
  const listDays = [];

  for (let index = 1; index <= daysInMonth; index++) {
    const day = moment(bookingDate).set('date', index);
    listDays.push(
      <div
        className="dayNumberAndString btn btn-day"
        key={index}
        onClick={() => {
          setBookingDate(day);
        }}
      >
        <div className="dayString">
          <Moment format="ddd">{day}</Moment>
        </div>
        <div className="dayNumber">
          <Moment format="DD">{day}</Moment>
        </div>
      </div>
    );
  }
  return listDays;
};

const PlanBookingsDays = ({ daysInMonth, bookingDate, setBookingDate }) => {
  return (
    <div className="DayOfMonth">
      <HorizontalScroll
        reverseScroll
        style={{
          paddingTop: '0',
          overflowX: 'scroll',
        }}
      >
        {listDaysInMonth(daysInMonth, bookingDate, setBookingDate)}
      </HorizontalScroll>
    </div>
  );
};

PlanBookingsDays.propTypes = {
  daysInMonth: PropTypes.number.isRequired,
};

export default PlanBookingsDays;
