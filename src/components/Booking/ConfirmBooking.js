import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment/locale/pl';
const ConfirmBooking = ({
  user: { user },
  startDateAndTimeBooking,
  endDateAndTimeBooking,
}) => {
  return (
    <div className="contaniner profileContainer">
      {user && startDateAndTimeBooking && endDateAndTimeBooking && (
        <div className="confirmBookingContainer">
          <div>Wysłano rezrwację</div>
          <div className="dateBooking">
            <h4>
              {' '}
              <Moment format="dddd D MMMM YYYY[r.]">
                {startDateAndTimeBooking}
              </Moment>
            </h4>
          </div>
          <div className="textBooking">od godziny</div>
          <div className="timeStart">
            <h4>
              <Moment format="LT">{startDateAndTimeBooking}</Moment>
            </h4>
          </div>
          <div className="textBooking">do godziny</div>
          <div className="timeEnd">
            <h4>
              <Moment format="LT">{endDateAndTimeBooking}</Moment>
            </h4>
          </div>
          <div className="text">dla użytkownika</div>
          <div className="userBooking">
            <h4>{user.nick}</h4>
          </div>
          <div>
            <button className="btn btn-green btn-capitalize btn-login">
              zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ConfirmBooking.propTypes = {
  user: PropTypes.object.isRequired,
  startDateAndTimeBooking: PropTypes.instanceOf(Date),
  endDateAndTimeBooking: PropTypes.instanceOf(Date),
};

export default ConfirmBooking;
