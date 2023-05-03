import { showAlert, SERVER_URL, ERR_FETCH_MESSAGE, ERR_SEND_MESSAGE } from './util.js';


export const fetchData = (onSuccess) => {
  fetch(`${SERVER_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert(ERR_FETCH_MESSAGE);
      }
    })
    .then((data) => onSuccess(data))
    .catch(() => {
      showAlert(ERR_FETCH_MESSAGE);
    });
};

export const sendData =(onSuccess, body) => {
  fetch(`${SERVER_URL}`, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess(response.json());
      } else {
        showAlert(ERR_SEND_MESSAGE);
      }
    })
    .then((data) => onSuccess(data))
    .catch(() => {
      showAlert(ERR_SEND_MESSAGE);
    });
};

