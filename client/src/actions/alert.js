import { REMOVE_ALERT, SET_ALERT } from './types';
import uuid from 'uuid';

const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};

export default setAlert;
