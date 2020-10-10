import React from 'react';
import PropTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal';

const PlanBookingsDays = (props) => {
  return (
    <div className="DayOfMonth">
      <HorizontalScroll
        reverseScroll
        style={{
          paddingTop: '0',
          overflowX: 'scroll',
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
  );
};

PlanBookingsDays.propTypes = {};

export default PlanBookingsDays;
