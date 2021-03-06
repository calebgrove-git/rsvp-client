function emailsFetch(data) {
  const fetched = fetch('https://rsvp-api1.herokuapp.com/api/users/emails', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('rsvp-token'),
    },
    body: JSON.stringify(data),
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

module.exports = { emailsFetch };
