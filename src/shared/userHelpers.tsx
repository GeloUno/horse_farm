import { userSignOutAction, reloadConfirmEmalStateAction, sendVerificationEmailAction } from '../redux/actions/userActions';
import { Dispatch } from 'redux';

export const handleSignOut = (dispatch: Dispatch<any>) => {
  dispatch(userSignOutAction);
};
export const handleSendVerificationEmail = (dispatch: Dispatch<any>) => {
  dispatch(sendVerificationEmailAction());
};
const reloadConfirmEmail = (dispatch: Dispatch<any>) => {
  dispatch(reloadConfirmEmalStateAction());
};
export const intervalGetEmailConfirmStatus = (dispatch: Dispatch<any>) => setInterval(() => {
  reloadConfirmEmail(dispatch);
}, 3000);

