function refreshFetch(data) {
  const fetched = fetch('https://rsvp-api1.herokuapp.com/api/users/refresh', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: data }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return 'Error';
    });
  return fetched;
}

module.exports = { refreshFetch };
