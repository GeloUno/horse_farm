import React from 'react';
import { IDevBookingData } from '../../DevUtility/booking';
// import { DevBookingData, IDevBookingData } from '../../DevUtility/booking';

const usersListInHour = (users: Array<IDevBookingData>) => {
  const usersList = users.map((user, index) => {
    return (
      <div
        data-testid={`userBookingListInHour userBookingListPart-${index}`}
        className="dataHourBooking userBookingList" key={user.id}>
        {++index}. {user.name}
      </div>
    );
  });
  return usersList;
};

const hourBooking = (listHourBooking: number, arrayHoursList: Array<React.ReactNode>, dayBookingData: Array<IDevBookingData>) => {
  const users = dayBookingData.filter((e) => {
    const date = new Date(e.hourBooking);
    return date.getHours() === listHourBooking;
  });

  arrayHoursList.push(
    <div
      data-testid={`hourBooking userBookingAt-${listHourBooking}`}
      className="hourBooking"
      key={listHourBooking}>
      <div
        data-testid='hourDataBooking'
        className="dataHourBooking">{listHourBooking + ':00'}</div>
      {usersListInHour(users)}
    </div>
  );
};

export const PlanBookingHoursUsersList = (
  firstHourBooking: number,
  lastHourBooking: number,
  dayBookingData: Array<IDevBookingData>
) => {
  const arrayHours: Array<React.ReactNode> = [];
  for (
    firstHourBooking;
    firstHourBooking < lastHourBooking;
    firstHourBooking++
  ) {
    hourBooking(firstHourBooking, arrayHours, dayBookingData);
  }
  return arrayHours;
};
