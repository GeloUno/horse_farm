import React, { useEffect, useState, useMemo } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import PlanBookingsDays from './PlanBookingsDays';
import PlanBookingHoures from './PlanBookingHours';
import { DevBookingDataGenerator } from '../../DevUtility/booking';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'moment/locale/pl'
moment.locale('pl');

const getWayToScroll = ({
  childFirstPointX,
  childWidth,
  parentFirstPointX,
  parentWidth,
}: {
  childFirstPointX: number,
  childWidth: number,
  parentFirstPointX: number,
  parentWidth: number,
}) => {
  let way = 0;
  childFirstPointX + childWidth > parentFirstPointX + parentWidth
    ? (way = childFirstPointX + childWidth - (parentFirstPointX + parentWidth))
    : childFirstPointX < parentFirstPointX &&
    (way = childFirstPointX - parentFirstPointX);
  return -way;
};

const getCoordinateParentChild = (elementChild: React.PropsWithChildren<any>) => {
  const childFirstPointX = elementChild.getBoundingClientRect().x;
  const childWidth = elementChild.getBoundingClientRect().width;
  const parentFirstPointX = elementChild.parentElement.parentElement.getBoundingClientRect()
    .x;
  const parentWidth = elementChild.parentElement.parentElement.getBoundingClientRect()
    .width;
  return { childFirstPointX, childWidth, parentFirstPointX, parentWidth };
};

const PlanBookings: React.FC = () => {
  const [bookingDay, setBookingDay] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState(
    moment(bookingDay).daysInMonth()
  );
  const [
    horizontalAmimationValueDays,
    setHorizontalAmimationValueDays,
  ] = useState(0);

  const DevBookingData = useMemo(() => DevBookingDataGenerator(), [])

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
    () => {
      scrollToDay();
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
    <div
      data-testid="containerPlanBooking"
      className="container containerPlanBooking">
      <div
        data-testid="dateHeader"
        className="dateHeader">
        <div
          data-testid="monthYearHeader"
          className="monthYearHeader"
        >
          <div
            className="month"
            data-testid="monthContent"
          >
            <h2 className="contentDate">
              <Moment format="MMMM" >{bookingDay}</Moment>
            </h2>
          </div>
          <div
            data-testid="yearContent"
            className="year contentDate">
            <Moment format="YYYY">{bookingDay}</Moment>
          </div>
          <div
            data-testid="changeMonth"
            className="changeMonth changeDateBooking contentDate">
            <div
              data-testid="prevMonth"
              className="prevMonth btnChangeDateBooking"
              onClick={() => {
                setBookingDay(new Date(moment(bookingDay).subtract(1, 'months').toDate()));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
              data-testid="nextMonth"
              className="nextMonth btnChangeDateBooking"
              onClick={() => {
                setBookingDay(new Date(moment(bookingDay).add(1, 'months').toDate()));
              }}
            >
              <i className="fas fa-chevron-right"></i>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div
          data-testid="dayHeader"
          className="dayHeader">
          <div
            data-testid="dayNumber"
            className="dayNumber">
            <h2 className="contentDate">
              <Moment format="D">{bookingDay}</Moment>
            </h2>
          </div>
          <div
            data-testid="daysOfWeek"
            className="daysOfWeek">
            <Moment format="dddd">{bookingDay}</Moment>
          </div>
          <div
            data-testid="changeDay"
            className="changeDay changeDateBooking contentDate">
            <div
              data-testid="prevDay"
              className="prevDay btnChangeDateBooking"
              onClick={() => {
                setBookingDay(new Date(moment(bookingDay).subtract(1, 'days').toDate()));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
              data-testid="nextDay"
              className="nextMonth btnChangeDateBooking"
              onClick={() => {
                setBookingDay(new Date(moment(bookingDay).add(1, 'days').toDate()));
              }}
            >
              <i className="fas fa-chevron-right"></i>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
      <PlanBookingsDays
        daysInMonth={daysInMonth}
        setBookingDay={setBookingDay}
        bookingDay={bookingDay}
        horizontalAmimationValueDays={horizontalAmimationValueDays}
      />
      <PlanBookingHoures
        BookingData={bookingMonth}
        bookingDay={bookingDay}
      />
    </div>
  );
};

export default PlanBookings;
