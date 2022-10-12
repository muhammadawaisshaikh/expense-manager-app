import axios from 'axios';

let baseUrl = 'https://reqres.in';

const Api = async (path, params, method) => {
  let options;
  
  options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: method,
    ...(params && {data: JSON.stringify(params)}),
  };
  console.log('options', params);

  return axios(baseUrl + path, options)
    .then(response => {
      return response;
    })
    .catch(async error => {
      return error.response;
    });
};

export default Api;