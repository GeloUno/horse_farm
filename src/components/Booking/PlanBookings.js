import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import PlanBookingsDays from './PlanBookingsDays';
import PlanBookingHoures from './PlanBookingHours';
import { DevBookingData } from '../../DevUtility/booking';
import { isMobile } from 'react-device-detect';
const getWayToScroll = ({
  childFirstPointX,
  childWidth,
  parentFirstPointX,
  parentWidth,
}) => {
  let way = 0;
  childFirstPointX + childWidth > parentFirstPointX + parentWidth
    ? (way = childFirstPointX + childWidth - (parentFirstPointX + parentWidth))
    : childFirstPointX < parentFirstPointX &&
      (way = childFirstPointX - parentFirstPointX);
  return -way;
};

const getCoordinateParentChild = (elementChild) => {
  const childFirstPointX = elementChild.getBoundingClientRect().x;
  const childWidth = elementChild.getBoundingClientRect().width;
  const parentFirstPointX = elementChild.parentElement.parentElement.getBoundingClientRect()
    .x;
  const parentWidth = elementChild.parentElement.parentElement.getBoundingClientRect()
    .width;
  return { childFirstPointX, childWidth, parentFirstPointX, parentWidth };
};

const PlanBookings = () => {
  const [bookingDay, setBookingDay] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState(
    moment(bookingDay).daysInMonth()
  );
  const [
    horizontalAmimationValueDays,
    setHorizontalAmimationValueDays,
  ] = useState(0);
  const scrollToDay = async () => {
    try {
      const daySelected = await new Date(bookingDay).getDate();
      const dayDiv = await document.querySelector(`.day-${daySelected}`);
      if (dayDiv !== null) {
        if (!isMobile) {
          await setHorizontalAmimationValueDays(0);
          await setHorizontalAmimationValueDays(
            getWayToScroll(getCoordinateParentChild(dayDiv))
          );
        } else {
          dayDiv.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (error) {
      console.log('Ups .. Scroll to Day :>> ', error);
    }
  };
  useEffect(
    (e) => {
      scrollToDay(e);
    },
    // return () => {
    //   cleanup
    // }
    [bookingDay]
  );

  const bookingMonth = DevBookingData.filter((data) => {
    return (
      moment(bookingDay).format('M') === moment(data.hourBooking).format('M') &&
      moment(bookingDay).format('YYYYY') ===
        moment(data.hourBooking).format('YYYYY')
      //FIXME: filter month and year should be in backend server
    );
  });

  useEffect(() => {
    setDaysInMonth(moment(bookingDay).daysInMonth());
  }, [bookingDay]);

  return (
    <div className="container containerPlanBooking">
      <div className="dateHeader ">
        <div className="monthYearHeader">
          <div className="month ">
            <h2 className="contentDate">
              <Moment format="MMMM">{bookingDay}</Moment>
            </h2>
          </div>
          <div className="year contentDate">
            <Moment format="YYYY">{bookingDay}</Moment>
          </div>
          <div className="changeMonth changeDateBooking contentDate">
            <div
              className="prevMonth btnChangeDateBooking"
              onClick={() => {
                setBookingDay(moment(bookingDay).subtract(1, 'months'));
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </div>
            <div
              className="nextMonth btnChangeDateBooking"
              onClick={() => {
                setBookingDay(moment(bookingDay).add(1, 'months'));
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="dayHeader">
          <div className="dayNumber">
            <h2 className="contentDate">
              <Moment format="D">{bookingDay}</Moment>
            </h2>
          </div>
          <div className="daysOfWeek">
            <Moment format="dddd">{bookingDay}</Moment>
          </div>
          <div className="changeDay changeDateBooking contentDate">
            <div
              className="prevDay btnChangeDateBooking"
              onClick={() => {
                setBookingDay(moment(bookingDay).subtract(1, 'days'));
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </div>
            <div
              className="nextMonth btnChangeDateBooking"
              onClick={() => {
                setBookingDay(moment(bookingDay).add(1, 'days'));
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <PlanBookingsDays
        daysInMonth={daysInMonth}
        setBookingDay={setBookingDay}
        bookingDay={bookingDay}
        setHorizontalAmimationValueDays={setHorizontalAmimationValueDays}
        horizontalAmimationValueDays={horizontalAmimationValueDays}
      />
      <PlanBookingHoures BookingData={bookingMonth} bookingDay={bookingDay} />
      {/* <div className="reservedButtonLink">
        <button className="btn btn-green btn-capitalize">rezerwacja</button>
      </div> */}
    </div>
  );
};

export default PlanBookings;
