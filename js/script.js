
var cognomi = ["Rossi", "Cotti", "Grossi", "Porti"];
var cognomiOrdinati;
var cognomeUtente;
var lista;
var listaPrec;
var indice;

console.log(cognomi);

var cognomeUtente = prompt("Inserisci il tuo cognome");
cognomi.push(cognomeUtente);

cognomiOrdinati = cognomi.sort();
console.log(cognomiOrdinati);

for (var i = 0; i < cognomiOrdinati.length; i++) {
  lista = cognomiOrdinati[i];
  listaPrima = document.getElementById('lista').innerHTML;
  document.getElementById("lista").innerHTML= listaPrima + "<li>" + lista + "</li>" ;

}

indice = (cognomiOrdinati.indexOf(cognomeUtente)) + 1;
document.getElementById("posizione").innerHTML = "Il cognome inserito è nella posizione: " + indice;
