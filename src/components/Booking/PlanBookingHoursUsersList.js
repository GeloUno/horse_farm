import React from 'react';
// import { DevBookingData } from '../../DevUtility/booking';

const usersListInHour = (users) => {
  const usersList = users.map((user, index) => {
    return (
      <div className="dataHourBooking userBookingList" key={user.id}>
        {++index}. {user.name}
      </div>
    );
  });
  return usersList;
};

const hourBooking = (listHourBooking, arrayHoursList, dayBookingData) => {
  const users = dayBookingData.filter((e) => {
    const date = new Date(e.hourBooking);
    return date.getHours() === listHourBooking;
  });

  arrayHoursList.push(
    <div className="hourBooking" key={listHourBooking}>
      <div className="dataHourBooking">{listHourBooking + ':00'}</div>
      {usersListInHour(users, listHourBooking)}
    </div>
  );
};

export const PlanBookingHoursUsersList = (
  firstHourBooking,
  lastHourBooking,
  dayBookingData
) => {
  const arrayHours = [];
  for (
    firstHourBooking;
    firstHourBooking < lastHourBooking;
    firstHourBooking++
  ) {
    hourBooking(firstHourBooking, arrayHours, dayBookingData);
  }
  return arrayHours;
};
