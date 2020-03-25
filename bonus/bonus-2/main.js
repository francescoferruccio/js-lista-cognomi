// Troviamo l'indice dell'elemento inserito senza usare .indexOf()

var lista, lista2 = [], cognomeUtente, indice;

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

//creiamo una copia del nostro array

for (var i = 0; i < lista.length; i++) {
  lista2.push(lista[i]);
}

console.log("Lista iniziale: " + lista);
console.log("Lista copiata: " + lista2);

// ordiniamo la lista senza usare sort
var tmp;

console.log(lista);

for (var i = 0; i < lista.length; i++) {
  for (var j = i+1; j < lista.length; j++) {
    if(lista[i] > lista[j]) {
      tmp = lista[i];
      lista[i] = lista[j];
      lista[j] = tmp;
      console.log("invertito " + lista[j] + " e " + lista[i]);
    }
  }
  console.log(lista);
}

// troviamo l'indice dell'elemento inserito dall'utente
for (var i = 0; i < lista.length; i++) {
  if (lista[i] === cognomeUtente) {
    indice = i;
  }
}

console.log("L'elemento inserito si trova in posizione: " + (indice + 1));
