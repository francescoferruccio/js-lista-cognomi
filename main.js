// Chiedi all’utente il cognome, inseriscilo in un array
// con altri cognomi e stampa la lista ordinata
// alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo
// utente si trova
var listaCognomi, cognomeUtente, msgOrdinato;

// creiamo la lista iniziale di cognomi
listaCognomi = ["Longo", "Bruno", "Privitera", "Ventimiglia", "Alemanno", "Rossi"];
console.log("lista iniziale: " + listaCognomi);

// chiediamo all'utente di inserire il suo cognome e lo salviamo
cognomeUtente = prompt("Inserisci il tuo cognome");

// controlliamo che il primo carattere sia maiuscolo per non sfalsare
// l'ordinamento ed eventualmente lo sostituiamo
if (cognomeUtente[0] !== cognomeUtente[0].toUpperCase()) {
  cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
}

// inseriamo il cognome inserito nella lista
listaCognomi.push(cognomeUtente);
console.log("lista dopo inserimento utente: " + listaCognomi);

// ordiniamo la lista
listaCognomi.sort();
console.log("lista ordinata: " + listaCognomi);

// stampiamo a schermo tutti gli elementi della lista
for (var i = 0; i < listaCognomi.length; i++) {
  msgOrdinato = document.getElementById('listaOrdinata').innerHTML;
  document.getElementById('listaOrdinata').innerHTML = msgOrdinato + "<li>" + listaCognomi[i] + "</li>";
  console.log("passaggio " + i + msgOrdinato + "<li>" + listaCognomi[i] + "</li>");
}

// stampiamo la posizione dell'elemento inserito
document.getElementById('index').innerHTML = "Il tuo Cognome si trova in posizione " + (listaCognomi.indexOf(cognomeUtente) + 1);
