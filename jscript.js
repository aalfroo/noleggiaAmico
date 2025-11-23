function calcolaNoleggio() {
  //  PREZZI AUTO
  const prezziGiornalieri = {
    giulietta: 50,
    giulia: 70,
    stelvio: 100,
    mito: 100,
    tonale: 100,
  };

  // OTTENIMENTO DATI PERSONALI
  const nome = document.getElementById("nome").value;
  const cognome = document.getElementById("cognome").value;
  const telefono = document.getElementById("telefono").value;
  const via = document.getElementById("via").value;
  const autoScelta = document.getElementById("autoScelta").value;
  const giorni = parseInt(document.getElementById("giorni").value); // CONVERTE STRINGA IN INTERI

  // CONTROLLO CAMPI OBBLIGATORI
  if (
    !nome ||
    !cognome ||
    !telefono ||
    !via ||
    !autoScelta ||
    isNaN(giorni) ||
    giorni <= 0
  ) {
    document.getElementById("risultato").innerHTML =
      " **Errore** Non tutti i campi obbligatori sono stati inseriti";
    return;
  }

  // CALCOLA COSTO SINGOLO
  const prezzoAutoGiornaliero = prezziGiornalieri[autoScelta];

  // CONTROLLO NEL CASO CI SIANO ERRORI NEL CALCOLO COSTO
  if (!prezzoAutoGiornaliero) {
    document.getElementById("risultato").innerHTML =
      " **Errore** al momento l'auto da lei selezionata non è disponibile, Ci scusiamo dell'incoveniente";
    return;
  }

  //CALCOLO COSTO TOTALE
  const costoTotale = prezzoAutoGiornaliero * giorni;

  // OUTPUT
  const risultatoDiv = document.getElementById("risultato");
  risultatoDiv.innerHTML = `
        <p> Riepilogo Noleggio Effettuato</p>
        <p>Cliente: ${nome} ${cognome}</p>
        <p>Indirizzo: ${via} - Tel: ${telefono}</p>
        <p>Auto Scelta: ${autoScelta.toUpperCase()} (${prezzoAutoGiornaliero} €/giorno)</p>
        <p>Durata: ${giorni} giorni</p>
        <hr style="border-top: 1px dashed #28a745;">
        <p style="font-size: 1.2em;">COSTO TOTALE STIMATO: ${costoTotale.toFixed(
          2
        )} €</p> `;
}
