document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());

    // Simula invio prenotazione
    fetch('/api/prenotazioni', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails)
    })
    .then(response => response.json())
    .then(data => {
        alert('Prenotazione confermata!');
        e.target.reset();
    })
    .catch(error => {
        alert('Errore nella prenotazione');
    });
});