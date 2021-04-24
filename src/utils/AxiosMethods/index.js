import axios from 'axios';
let baseURL = 'https://letusshare.herokuapp.com/api/';

/* Basic Axios Request*/

export const doGet = (url, data) =>
  new Promise((resolve, reject) =>
    axios({
      url: baseURL + url,
      method: 'GET',
      headers: {
        // Authorization: 'Bearer ' + data,
        'Content-Type': 'application/json',
      },
      // data: data,
    })
      .then((result) => {
        // console.log(result);
        resolve(result);
      })
      .catch((error) => reject(error)),
  );

export const doPost = (url, data) => {
  const endPoint = baseURL + url;

  return new Promise((resolve) =>
    axios.post(endPoint, data).then((result) => {
      resolve(result.data);
    }),
  );
};

export const doPostWithTokenResponse = (url, data) => {
  const endPoint = baseURL + url;

  return new Promise((resolve) =>
    axios.post(endPoint, data).then((result) => {
      resolve({data: result.data, token: result.headers['x-auth-token']});
    }),
  );
};

export const doGetWithTokenInHeader = (url, token) => {
  // console.log(`doGetWithTokenInHeader ${url} and Token ${token}`);
  const endPoint = baseURL + url;
  return new Promise((resolve, reject) =>
    axios(endPoint, {
      headers: {
        'x-auth-token': token,
      },
    })
      .then((result) => {
        // console.log('Result from api in doGetWithTokenInHeader', result);
        resolve(result);
      })
      .catch((error) => reject(error)),
  );
};

export const doPostAws = (data, url) =>
  new Promise((resolve) =>
    axios({
      url: url,
      method: 'POST',
      //timeout: 1000 * 8,
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': "Bearer " + token
      },
      data,
    })
      .then((result) => {
        // console.log('Post Request Result', result);
        resolve(result);
      })
      .catch((error) => resolve(error)),
  );

export const doPutAws = (data, url) =>
  new Promise((resolve) =>
    axios({
      url: url,
      method: 'PUT',
      //timeout: 1000 * 8,
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': "Bearer " + token
      },
      data,
    })
      .then((result) => resolve(result))
      .catch((error) => resolve(error)),
  );

export const doPostWithToken = (token, data, url) =>
  new Promise((resolve) =>
    axios({
      url: baseURL + url,
      method: 'POST',
      //timeout: 1000 * 8,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      data,
    })
      .then((result) => resolve(result))
      .catch((error) => resolve(error)),
  );
export const doPostWithoutBody = (token, url) =>
  new Promise((resolve) =>
    axios({
      url: baseURL + url,
      method: 'POST',
      //timeout: 1000 * 8,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((result) => resolve(result))
      .catch((error) => resolve(error)),
  );

export const doDelete = (token, url) =>
  new Promise((resolve) =>
    axios({
      url: baseURL + url,
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((result) => resolve(result))
      .catch((error) => resolve(error)),
  );

/**
 *
 * @param {*The Url for api request} url
 * @param {*Any State(array) which we want to set, its Function will be passed } setState
 * @param {*The property from the data which we want in our our state} filterProperty
 */
