import React from 'react';

export enum TypeHourOptionalBooking {
  START = 'Start',
  END = 'End'
}

export const forHoursOptions = (firstHourBooking: number, lastHourBooking: number, typeHour: TypeHourOptionalBooking) => {
  const arrayOptionsHour = [];
  for (
    firstHourBooking;
    firstHourBooking < lastHourBooking;
    firstHourBooking++
  ) {
    arrayOptionsHour.push(
      <option
        data-testid={`${typeHour}SelectHour-${firstHourBooking}`}
        key={firstHourBooking}
        value={firstHourBooking}>
        {firstHourBooking + ':00'}
      </option>
    );
  }
  return arrayOptionsHour;
};
