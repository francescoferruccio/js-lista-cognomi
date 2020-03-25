// Troviamo l'indice dell'elemento inserito senza usare .indexOf()

var lista, cognomeUtente, indice;

// creiamo la lista iniziale di cognomi
lista = ["Longo", "Bruno", "Privitera", "Ventimiglia", "Alemanno", "Rossi"];

// chiediamo all'utente di inserire il suo cognome e lo salviamo
cognomeUtente = prompt("Inserisci il tuo cognome");

// controlliamo che il primo carattere sia maiuscolo per non sfalsare
// l'ordinamento ed eventualmente lo sostituiamo
if (cognomeUtente[0] !== cognomeUtente[0].toUpperCase()) {
  cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
}

// inseriamo il cognome inserito nella lista
lista.push(cognomeUtente);

// ordiniamo la lista
lista.sort();
console.log("lista ordinata: " + lista);


// troviamo l'indice dell'elemento inserito dall'utente
for (var i = 0; i < lista.length; i++) {
  if (lista[i] === cognomeUtente) {
    indice = i;
  }
}

console.log("L'elemento inserito si trova in posizione: " + (indice + 1));
