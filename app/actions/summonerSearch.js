const startingRequest = () => {
  return {
    type: 'STARTING_REQUEST'
  };
};
const finishedRequest = (response) => {
  return {
    type: 'FINISHED_REQUEST',
    response: response
  };
};

export const getSummonerData = (payload) => {
  return dispatch => {
    dispatch(startingRequest());
    return new Promise(function(resolve, reject) {
      let request=new XMLHttpRequest();
      request.open('GET', `/api/${payload.region}/summoner/${payload.summonerName}`, true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.send(payload);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.responseText);
        }
      };
    }).then(response =>
      dispatch(finishedRequest(JSON.parse(response))));
  };
};