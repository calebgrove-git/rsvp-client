function inviteContact(event) {
  const fetched = fetch(
    `https://rsvp-api1.herokuapp.com/api/events/${event.id}`,
    {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('rsvp-token'),
      },
      body: JSON.stringify(event),
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

module.exports = { inviteContact };
