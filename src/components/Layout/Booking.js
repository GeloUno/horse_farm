import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import pl from 'date-fns/locale/pl';

import 'react-datepicker/dist/react-datepicker.css';

const Booking = ({ userID, nick = 'Ami' }) => {
  const DateNow = new Date();
  const [startDate, setStartDate] = useState(DateNow);

  const firstHouer = 8;
  const lastHouer = 21;
  const nextDate = (dateAdd) => {
    // FIXME: at work it is
  };

  const forHouerOptions = (firstHouer, lastHouer) => {
    const arrayOptionsHouer = [];
    for (firstHouer; firstHouer < lastHouer; firstHouer++) {
      // console.log('firstHouer :>> ', firstHouer);
      arrayOptionsHouer.push(
        <option key={firstHouer} value={firstHouer + ':00'}>
          {firstHouer + ':00'}
        </option>
      );
    }
    return arrayOptionsHouer;
  };

  const handleSubmit = (e, data) => {
    e.prevetDefault();
    console.log(data);
  };

  return (
    <div className="contaniner profileContainer editProfileContainer">
      <div className="imapgeProfile">
        <img
          className={'image-user'}
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="użytkownik"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bookingForm">
          <p>nick:</p>
          <label>{nick}</label>
        </div>
        <DatePicker
          selected={startDate}
          minDate={addDays(new Date(), 2)}
          maxDate={addDays(new Date(), 16)}
          locale={pl}
          onChange={(date) => {
            console.log('date', date);
            setStartDate(date);
          }}
          inline
        />

        <div className="bookingForm">
          <p>od godziny:</p>
          <select name="fromHouerBooking">
            {forHouerOptions(firstHouer, lastHouer)}
          </select>
        </div>
        <div className="bookingForm">
          <p>do godziny: </p>
          <select name="toHouerBooking">
            {forHouerOptions(firstHouer + 1, lastHouer + 1)}
          </select>
        </div>
        <div>
          <p></p>
          <input
            className="btn btn-green btn-capitalize"
            type="submit"
            value="Wyślij"
          />
        </div>
      </form>
      <div className="profileButtons btn-editProfileButton">
        <button className="btn btn-green btn-capitalize">Wyślij</button>
      </div>
    </div>
  );
};
Booking.propTypes = {};

export default Booking;
