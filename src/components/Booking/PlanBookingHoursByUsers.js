import React from 'react';
import { DevBookingData } from '../../DevUtility/booking';

const usersInHourBooking = (users) => {
  const usersInHouer = users.map((user, index) => {
    return (
      <div className="dataHouerBooking userBooking" key={user.id}>
        {++index}. - {user.id} -
      </div>
    );
  });
  return usersInHouer;
};

const hourBookingDiv = (firstHourBooking, arrayHoursDiv) => {
  const users = DevBookingData;

  arrayHoursDiv.push(
    <div className="houerBooking" key={firstHourBooking}>
      <div className="dataHouerBooking">{firstHourBooking + ':00'}</div>
      {usersInHourBooking(users)}
    </div>
  );
};

export const PlanBookingHoursByUsers = (firstHourBooking, lastHourBooking) => {
  const arrayHours = [];
  for (
    firstHourBooking;
    firstHourBooking < lastHourBooking;
    firstHourBooking++
  ) {
    hourBookingDiv(firstHourBooking, arrayHours);
  }
  return arrayHours;
};
