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
  dadiRisultato.innerHTML = `Giocatore: ${numeroGiocatore}, Computer: ${numeroComputer} - ${risultato}`;
});

// ESERCIZIO 2 - Finta Login

// Lista di email autorizzate
const emailAutorizzate = [
  "mario@rossi.com",
  "marco@bianchi.com",
  "gianni@manni.com",
  "danny@kanny.com",
  "pinco@pallino.com"
];

// Seleziona gli elementi del DOM
const emailInput = document.getElementById('emailInput');
const verificaEmail = document.getElementById('verificaEmail');
const esitoLogin = document.getElementById('esitoLogin');

// Aggiunge l'evento al click del bottone per verificare l'email
verificaEmail.addEventListener('click', function () {
  // Ottiene il valore dell'input
  const emailUtente = emailInput.value;
  let emailTrovata = false;

  // Controlla se l'email è nella lista autorizzata
  for (let i = 0; i < emailAutorizzate.length; i++) {
    if (emailUtente === emailAutorizzate[i]) {
      emailTrovata = true;
      break;
    }
  }

  // Stampa il risultato del controllo in pagina
  if (emailTrovata) {
    esitoLogin.innerHTML = "Accesso consentito.";
  } else {
    esitoLogin.innerHTML = "Accesso negato.";
  }
});