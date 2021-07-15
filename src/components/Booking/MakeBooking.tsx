import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import setHour from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import pl from 'date-fns/locale/pl';
import 'react-datepicker/dist/react-datepicker.css';
import { forHoursOptions, TypeHourOptionalBooking } from '../../utility/forHoursOptions';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export type IMakeBookingProps = {
  firstHourBooking?: number,
  lastHourBooking?: number,
  setStartDateAndTimeBooking(date: Date): void,
  setEndDateAndTimeBooking(date: Date): void
}

const MakeBooking: React.FC<IMakeBookingProps> = ({
  firstHourBooking = 8,
  lastHourBooking = 21,
  setStartDateAndTimeBooking,
  setEndDateAndTimeBooking,
}) => {
  const userAuth = useSelector((state: RootState) => state.userAction);
  const { user } = userAuth;

  const [dayBooking, setDayBooking] = useState<Date>(addDays(new Date(), 2));
  const [startTimeBooking, setStartTimeBooking] = useState<number>(firstHourBooking);
  const [endTimeBooking, setEndTimeBooking] = useState<number>(1 + +startTimeBooking);
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    history.push('/potwierdzenie_rezerwacji');
  };

  return (
    <div
      data-testid="makeBookingBody"
      className="contaniner profileContainer editProfileContainer"
    >
      <div
        data-testid="userMakeBookingImage"
      >
        {user && user.photoId && (
          <img
            data-testid="userMakeBookingImageSrc"
            className={'image-user'}
            src={user.photoId}
            alt="użytkownik" />
        )}
      </div>
      <form
        data-testid="formUserMakeBooking"
        onSubmit={(e) => handleSubmit(e)}>
        <div
          data-testid="makeBookingUserName"
          className="bookingForm">
          <p className="mg-1-right">name:</p>
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
        </div>
        <DatePicker
          data-testid="dataPicker"
          selected={dayBooking}
          minDate={addDays(new Date(), 2)}
          maxDate={addDays(new Date(), 16)}
          locale={pl}
          onChange={(date) => {
            date && !Array.isArray(date) && (setDayBooking(date));
            date && Array.isArray(date) && (setDayBooking(date[0]));
          }}
          inline
        />
        <p
          data-testid="descriptionMakeBooking"
        >*48 godzinnym wyprzedzeniem</p>

        <div
          data-testid="makeBookingHourStart"
          className="bookingForm">
          <p className="mg-1-right">od godziny:</p>
          <select
            data-testid="makeBookingHourSelectStart"
            name="fromHourBooking"
            value={startTimeBooking}
            onChange={(e) => {
              setStartTimeBooking(+e.target.value);
              setEndTimeBooking(1 + +e.target.value);
            }}
          >
            {forHoursOptions(
              firstHourBooking,
              lastHourBooking,
              TypeHourOptionalBooking.START
              // true,
              //  false
            )}
          </select>
        </div>
        <div
          data-testid="makeBookingHourEnd"
          className="bookingForm">
          <p className="mg-1-right">do godziny: </p>
          <select
            data-testid="makeBookingHourSelectEnd"
            name="toHourBooking"
            value={endTimeBooking}
            onChange={(e) => setEndTimeBooking(+e.target.value)}
          >
            {forHoursOptions(
              1 + +startTimeBooking,
              lastHourBooking + 1,
              TypeHourOptionalBooking.END
              // true,
              // false
            )}
          </select>
        </div>
        <div>
          <input
            data-testid="makeBookingHourButtonSubmit"
            className="btn btn-green btn-capitalize mg-2-top"
            type="submit"
            value="wyślij"
          />
        </div>
      </form>
    </div>
  );
};

export default MakeBooking;
