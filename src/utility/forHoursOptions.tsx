import React from 'react';

export const forHoursOptions = (firstHourBooking: number, lastHourBooking: number) => {
  const arrayOptionsHour = [];
  for (
    firstHourBooking;
    firstHourBooking < lastHourBooking;
    firstHourBooking++
  ) {
    arrayOptionsHour.push(
      <option key={firstHourBooking} value={firstHourBooking}>
        {firstHourBooking + ':00'}
      </option>
    );
  }
  return arrayOptionsHour;
};
