import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Booking = ({ userID, nick = 'Ami' }) => {
  const firstHouer = 8;
  const lastHouer = 21;
  const DateNow = new Date();
  const nextDate = (dateAdd) => {
    // FIXME: at work it is
  };

  const forHouerOptions = (firstHouer, lastHouer) => {
    const arrayOptionsHouer = [];
    for (firstHouer; firstHouer < lastHouer; firstHouer++) {
      console.log('firstHouer :>> ', firstHouer);
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
      <form onSubmit={handleSubmit} className="userProfile editUserProfile">
        <div>
          <p>nick:</p>
          <label>{nick}</label>
        </div>
        <div>
          <p>podaj dzień</p>
          <select value="1111" name="dayBooking">
            <option value="grejpfrutowy">
              {'dzień: ' + DateNow.getUTCDate()}
            </option>
            <option value="limonkowy">Limonkowy</option>
            <option value="kokosowy">Kokosowy</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <div>
          <p>od godziny:</p>
          <select value="" name="fromHouerBooking">
            {forHouerOptions(firstHouer, lastHouer)}
          </select>
        </div>
        <div>
          <p>do godziny: </p>
          <select value="" name="toHouerBooking">
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
