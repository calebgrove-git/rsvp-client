function eventsFetch(user) {
  const fetched = fetch(
    `https://rsvp-api1.herokuapp.com/api/events/get/${user}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('rsvp-token'),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return 'Error';
    });
  return fetched;
}

module.exports = { eventsFetch };
