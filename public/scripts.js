function getJoke(category) {
  fetch(`/jokebook/joke/${category}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById('joke').innerHTML = `Błąd: ${data.error}`;
      } else {
        document.getElementById('joke').innerHTML = `<strong>Żart:</strong> ${data.joke} <br><strong>Odpowiedź:</strong> ${data.response}`;
      }
    })
    .catch(error => {
      document.getElementById('joke').innerHTML = `Wystąpił błąd: ${error}`;
    });
}