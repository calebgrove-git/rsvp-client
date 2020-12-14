function createNewAccount(data) {
  return fetch('https://rsvp-api1.herokuapp.com/api/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      return 'Success';
    })
    .catch(() => {
      return 'Error';
    });
}

module.exports = { createNewAccount };
