import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import setHour from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import pl from 'date-fns/locale/pl';
import 'react-datepicker/dist/react-datepicker.css';
import { forHoursOptions } from '../../utility/forHoursOptions';
const MakeBooking = ({
  userID,
  nick,
  firstHourBooking = 8,
  lastHourBooking = 21,
  setStartDateAndTimeBooking,
  setEndDateAndTimeBooking,
}) => {
  const [dayBooking, setDayBooking] = useState(addDays(new Date(), 2));
  const [startTimeBooking, setStartTimeBooking] = useState(firstHourBooking);
  const [endTimeBooking, setEndTimeBooking] = useState(1 + +startTimeBooking);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingStartDateAndTime = setMinutes(
      setHour(dayBooking, startTimeBooking),
      0
    );

    const bookingEndDateAndTime = setMinutes(
      setHour(dayBooking, endTimeBooking),
      0
    );
    setStartDateAndTimeBooking(bookingStartDateAndTime);
    setEndDateAndTimeBooking(bookingEndDateAndTime);
  };

  return (
    <div className="contaniner profileContainer editProfileContainer">
      <div>
        <img
          className={'image-user'}
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="użytkownik"
        />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="bookingForm">
          <p className="mg-1-right">nick:</p>
          <h2>{nick}</h2>
        </div>
        <DatePicker
          selected={dayBooking}
          minDate={addDays(new Date(), 2)}
          maxDate={addDays(new Date(), 16)}
          locale={pl}
          onChange={(date) => {
            setDayBooking(date);
          }}
          inline
        />
        <p>*48 godzinnym wyprzedzeniem</p>

        <div className="bookingForm">
          <p className="mg-1-right">od godziny:</p>
          <select
            name="fromHourBooking"
            value={startTimeBooking}
            onChange={(e) => {
              setStartTimeBooking(+e.target.value);
              setEndTimeBooking(1 + +e.target.value);
            }}
          >
            {forHoursOptions(firstHourBooking, lastHourBooking)}
          </select>
        </div>
        <div className="bookingForm">
          <p className="mg-1-right">do godziny: </p>
          <select
            name="toHourBooking"
            value={endTimeBooking}
            onChange={(e) => setEndTimeBooking(+e.target.value)}
          >
            {forHoursOptions(1 + +startTimeBooking, lastHourBooking + 1)}
          </select>
        </div>
        <div>
          <input
            className="btn btn-green btn-capitalize mg-2-top"
            type="submit"
            value="wyślij"
          />
        </div>
      </form>
    </div>
  );
};
MakeBooking.propTypes = {
  userID: PropTypes.any.isRequired,
  nick: PropTypes.string.isRequired,
};

export default MakeBooking;
