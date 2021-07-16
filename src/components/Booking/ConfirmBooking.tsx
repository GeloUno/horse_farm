import React, { useState } from 'react';
import Moment from 'react-moment';
import 'moment/locale/pl';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Message, TypeMessage } from '../Message';
import { Box } from '@material-ui/core';

interface IConfirmBookingProps {
  startDateAndTimeBooking: Date,
  endDateAndTimeBooking: Date
}
const ConfirmBooking: React.FC<IConfirmBookingProps> = ({ startDateAndTimeBooking, endDateAndTimeBooking }) => {

  const history = useHistory();

  const [ConfirmBookingState, setConfirmBookingState] = useState<boolean>(false)

  const userAuth = useSelector((state: RootState) => state.userAction);

  const { user } = userAuth;

  const redirectToHomePageHandler = () => {
    history.push('/')
  }

  const confirmBookingHandler = () => {
    setConfirmBookingState((): boolean => { return true })

  }
  return (
    <div
      data-testid='confrimBookingContainer'
      className="contaniner profileContainer"
    >
      {user && user.email && !ConfirmBookingState && startDateAndTimeBooking && endDateAndTimeBooking && (
        <div
          data-testid='confrimBookingBody'
          className="confirmBookingContainer">
          <div

            data-testid="confirmBookingDescriptionFirst"
          >Proszę o potwierdzenie rezrwacji:</div>
          <div
            data-testid="confrimBookingStartHour"
            className="dateBooking"
          >
            <h4>
              <Moment format="dddd D MMMM YYYY[r.]">
                {startDateAndTimeBooking}
              </Moment>
            </h4>
          </div>
          <div
            data-testid="confrimBookingStarDescription"
            className="textBooking">od godziny</div>
          <div className="timeStart">
            <h4>
              <Moment format="LT">{startDateAndTimeBooking}</Moment>
            </h4>
          </div>
          <div
            data-testid="confrimBookingEndDescription"
            className="textBooking">do godziny</div>
          <div
            data-testid="confrimBookingEndHour"
            className="timeEnd">
            <h4>
              <Moment format="LT">{endDateAndTimeBooking}</Moment>
            </h4>
          </div>
          <div className="text">dla użytkownika</div>
          <div className="userBooking">
            <h4>{`${user.firstName} ${user.lastName}`}</h4>
          </div>
          <div>
            <button
              data-testid="confrimBookingButtonCancel"
              className="btn btn-red btn-capitalize btn-login"
              onClick={() => {
                redirectToHomePageHandler()
              }}
            >
              cofnij
            </button>

            <button
              data-testid="confirmBookingButtonConfirm"
              className="btn btn-green btn-capitalize btn-login"
              onClick={() => {
                confirmBookingHandler()
              }}
            >
              potwierdzam
            </button>
          </div>
        </div>
      )}
      {!user.email && (<Message
        data-testid="confrimBookingMessageError"
        title={'Brak danych użytkownika'}
        typeMessage={TypeMessage.ERROR}
        textButtonConfirm={'OK'}
        confirmAction={redirectToHomePageHandler}
      >
        <Box p={5}>
          Ups coś poszło nie tak zapraszamy później...
        </Box>
      </Message>)
      }
      {user && user.email && ConfirmBookingState && (<Message
        data-testid="confrimBookingMessageSuccess"
        title={`Rezerwacja dla: ${user.email}`}
        typeMessage={TypeMessage.SUCCESS}
        textButtonConfirm={'OK'}
        confirmAction={redirectToHomePageHandler}
      >
        <Box p={5}>

          Termin rezerwacji został wysłany
        </Box>
      </Message>)
      }
    </div>
  );
};

export default ConfirmBooking;
