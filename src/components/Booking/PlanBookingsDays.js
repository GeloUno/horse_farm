import React from 'react';
import PropTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal';
import Moment from 'react-moment';

const listDaysInMonth = (daysInMonth, bookingDay, setBookingDay) => {
  const listDays = [];

  for (let index = 1; index <= daysInMonth; index++) {
    const day = new Date(bookingDay).setDate(index);
    const dayInWeek = new Date(day).getDay();
    console.log(dayInWeek);
    listDays.push(
      <div
        className="dayNumberAndString btn btn-day"
        key={index}
        onClick={() => {
          setBookingDay(day);
        }}
      >
        <div className={dayInWeek === 0 ? 'dayString day-red' : 'dayString'}>
          <Moment format="dddd">{day}</Moment>
        </div>
        <div className={dayInWeek === 0 ? 'dayNumber day-red' : 'dayNumber'}>
          <Moment format="DD">{day}</Moment>
        </div>
      </div>
    );
  }
  return listDays;
};

const PlanBookingsDays = ({ daysInMonth, bookingDay, setBookingDay }) => {
  return (
    <div className="DayOfMonth">
      <HorizontalScroll
        reverseScroll
        style={{
          paddingTop: '0',
          overflowX: 'scroll',
        }}
      >
        {listDaysInMonth(daysInMonth, bookingDay, setBookingDay)}
      </HorizontalScroll>
    </div>
  );
};

PlanBookingsDays.propTypes = {
  daysInMonth: PropTypes.number.isRequired,
};

export default PlanBookingsDays;
