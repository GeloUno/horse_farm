import React from 'react';
import HorizontalScroll from '../../utility/ScrollHorizontal';
// import HorizontalScroll from 'react-scroll-horizontal';
import Moment from 'react-moment';


const listDaysInMonth = (daysInMonth: number, bookingDay: Date, setBookingDay: Function) => {
  const listDays = [];
  for (let index = 1; index <= daysInMonth; index++) {
    const day = new Date(bookingDay).setDate(index);
    const dayInWeek = new Date(day).getDay();
    listDays.push(
      <div
        data-testid={`dayInMonthBody dayInMonth-${index}`}
        className={`dayNumberAndString btn btn-day day-${index}`}
        key={index}
        onClick={() => {
          setBookingDay(day);
        }}
      >
        <div
          data-testid='dayInMonthString'
          className={dayInWeek === 0 ? 'dayString day-red' : 'dayString'}
        >
          <Moment format="dddd">{day}</Moment>
        </div>
        <div
          data-testid='dayInMonthNumber'
          className={dayInWeek === 0 ? 'dayNumber day-red' : 'dayNumber'}>
          <Moment format="DD">{day}</Moment>
        </div>
      </div>
    );
  }
  return listDays;
};

export interface IPlanBookingsDaysProps {
  daysInMonth: number,
  bookingDay: Date,
  setBookingDay: React.Dispatch<React.SetStateAction<Date>>,
  horizontalAmimationValueDays: number
}


const PlanBookingsDays: React.FC<IPlanBookingsDaysProps> = ({
  daysInMonth,
  bookingDay,
  setBookingDay,
  horizontalAmimationValueDays,
}) => {
  return (
    <div
      className="DayOfMonth"
      data-testid="planBookingDaysBody"
    >
      <HorizontalScroll
        data-testid='horizontalDaysScrollBody'
        // pageLock={true}
        reverseScroll={true}
        // config={{ stiffness: 5, damping: 3 }}
        animValues={horizontalAmimationValueDays}
        style={{
          paddingTop: '0',
          overflowX: 'scroll',
        }}
      >
        {listDaysInMonth(daysInMonth, bookingDay, setBookingDay)}
      </HorizontalScroll>
    </div>
  );
};

export default PlanBookingsDays;
