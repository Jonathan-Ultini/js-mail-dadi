// ESERCIZIO 1 - Gioco dei dadi

// Funzione per generare un numero random da 1 a 6
function generaNumero() {
  return Math.floor(Math.random() * 6) + 1;
}

// Seleziona gli elementi del DOM
const dadiRisultato = document.getElementById('dadiRisultato');
const lanciaDadi = document.getElementById('lanciaDadi');

// Aggiunge l'evento al click del bottone per lanciare i dadi
lanciaDadi.addEventListener('click', function () {
  // Genera i numeri casuali per giocatore e computer
  const numeroGiocatore = generaNumero();
  const numeroComputer = generaNumero();

  // Determina il vincitore
  let risultato;
  if (numeroGiocatore > numeroComputer) {
    risultato = "Hai vinto!";
  } else if (numeroGiocatore < numeroComputer) {
    risultato = "Ha vinto il computer!";
  } else {
    risultato = "Pareggio!";
  }

  // Stampa il risultato in pagina
  dadiRisultato.textContent = `Giocatore: ${numeroGiocatore}, Computer: ${numeroComputer} - ${risultato}`;
});