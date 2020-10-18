import React from 'react';
// import { DevBookingData } from '../../DevUtility/booking';

const usersListInHour = (users) => {
  const usersList = users.map((user, index) => {
    return (
      <div className="dataHouerBooking userBookingList" key={user.id}>
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
    <div className="houerBooking" key={listHourBooking}>
      <div className="dataHouerBooking">{listHourBooking + ':00'}</div>
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
