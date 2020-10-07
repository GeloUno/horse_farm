import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import pl from 'date-fns/locale/pl';
import HorizontalScroll from 'react-scroll-horizontal';

const PlanBookings = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container containerPlanBooking">
      <div className="dateHeader ">
        <div className="monthYearHeader">
          <div className="month">
            <h2>Wrzesień</h2>
          </div>
          <div className="year">2020</div>
          <div className="year">
            <div className="changeMonth changeDateBooking">
              <div className="prevMonth btnChangeDateBooking">
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className="nextMonth btnChangeDateBooking">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="dayHeader">
          <div className="dayNumber">
            <h2>22</h2>
          </div>
          <div className="daysOfWeek">sobota</div>
          <div className="changeDay changeDateBooking">
            <div className="prevDay btnChangeDateBooking">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="nextMonth btnChangeDateBooking">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="DayOfMonth">
        <HorizontalScroll
          reverseScroll
          style={{
            paddingTop: '0',
          }}
        >
          <div className="btn">1</div>
          <div className="btn">2</div>
          <div className="btn">3</div>
          <div className="btn">4</div>
          <div className="btn">5</div>
          <div className="btn">6</div>
          <div className="btn">7</div>
          <div className="btn">8</div>
          <div className="btn">9</div>
          <div className="btn">10</div>
          <div className="btn">11</div>
          <div className="btn">12</div>
          <div className="btn">13</div>
          <div className="btn">14</div>
          <div className="btn">15</div>
          <div className="btn">16</div>
          <div className="btn">17</div>
          <div className="btn">18</div>
          <div className="btn">19</div>
          <div className="btn">20</div>
          <div className="btn">21</div>
          <div className="btn">22</div>
          <div className="btn">23</div>
          <div className="btn">24</div>
          <div className="btn">25</div>
          <div className="btn">26</div>
          <div className="btn">27</div>
          <div className="btn">28</div>
          <div className="btn">29</div>
          <div className="btn">30</div>
          <div className="btn">31</div>
        </HorizontalScroll>
      </div>
      <div className="clendaryHouerBookingBody">
        <div className="clendaryBooking"></div>
        <div className="houerBooking">godziny</div>
      </div>
      <div>
        <button className="btn btn-green btn-capitalize">rezerwacja</button>
      </div>
    </div>
  );
};

PlanBookings.propTypes = {};

export default PlanBookings;
