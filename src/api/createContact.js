function createContact(data) {
  const fetched = fetch('https://rsvp-api1.herokuapp.com/api/contacts', {
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

module.exports = { createContact };
