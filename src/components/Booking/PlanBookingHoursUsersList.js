import React, { useState } from 'react';
import { DevBookingData } from '../../DevUtility/booking';

const usersListInHour = (users, hourBooking) => {
  const usersList = users.map((user, index) => {
    // console.log(
    //   'user hour',
    //   user.name,
    //   '->',
    //   user.hourBooking,
    //   'test hour date',
    //   new Date(user.hourBooking)
    // );

    return (
      // startHour < nowHour &&
      // endHour > nowHour &&
      <div className="dataHouerBooking userBooking" key={user.id}>
        {++index}. {user.name}
      </div>
    );
  });
  return usersList;
};

const hourBooking = (listHourBooking, arrayHoursList) => {
  const users = DevBookingData.filter((e) => {
    const date = new Date(e.hourBooking);
    return date.getHours() === listHourBooking;
  });

  arrayHoursList.push(
    <div className="houerBooking" key={listHourBooking}>
      <div className="dataHouerBooking">{listHourBooking + ':00'}</div>
      {usersListInHour(users, listHourBooking)}
    </div>
  );
};

export const PlanBookingHoursUsersList = (
  firstHourBooking,
  lastHourBooking
) => {
  const arrayHours = [];
  for (
    firstHourBooking;
    firstHourBooking < lastHourBooking;
    firstHourBooking++
  ) {
    hourBooking(firstHourBooking, arrayHours);
  }
  return arrayHours;
};
