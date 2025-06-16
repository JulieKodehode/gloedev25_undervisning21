# Oversikt i JavaScript

## Symboler (Symbols)

- [] – Braketter (square brackets). Brukes til å definere arrays (lister) og for å hente ut elementer fra arrays eller objekter.

Eksempel:
let liste = [1, 2, 3];
console.log(liste[0]); // 1

- () – Parenteser (parentheses). Brukes til å definere parametere ved funksjonserklæring og til å sende inn argumenter ved funksjonskall.

Eksempel:
function hils(navn) {
console.log("Hei, " + navn);
}
hils("Ola");

- {} – Krøllparenteser (curly brackets). Brukes for å definere kodeblokker (i funksjoner, if-setninger osv.) og til å definere objekter.

Eksempel:
let person = {
navn: "Ola",
alder: 25
};

- "" – Dobble hermetegn (double quotes). Brukes til å lage tekststrenger. Du kan også bruke ' enkel hermetegn(single quotes) med samme resultat. Eller `` bakover tik (backtic) for template litteral.

Eksempel:
let tekst = "Hei verden";

- = – Tildelingsoperator (assignment operator). Brukes til å tilordne en verdi til en variabel.

Eksempel:
let alder = 30;

## Datatyper (Data Types)

### Primitive datatyper (Primitive Data Types)

- number – Et tall, f.eks. 42 eller 3.14.

Eksempel:
let tall = 10;

- string – En tekststreng, f.eks. "Hei verden".

Eksempel:
let melding = "God morgen";

- boolean – Sant eller usant, true eller false.

Eksempel:
let erLoggetInn = true;

- undefined – En verdi som ikke er definert eller ikke er tildelt.

Eksempel:
let x;
console.log(x); // undefined

- NaN – Står for "Not a Number". Oppstår når du forsøker å gjøre matematikk på noe som ikke er et tall.

Eksempel:
let resultat = "tekst" / 2;
console.log(resultat); // NaN

### Ikke-primitive datatyper (Non-Primitive Data Types)

- array – En liste med verdier, som kan inneholde ulike datatyper.

Eksempel:
let blandet = [1, "tekst", true];

- object – En samling med nøkkel-verdi-par.

Eksempel:
let bok = {
tittel: "Min bok",
sider: 200
};

## Variabler (Variables)

- let – Deklarerer en variabel som kan endres. Gyldig innenfor blokken den er definert i.

Eksempel:
let navn = "Per";
navn = "Kari";

- const – Deklarerer en konstant verdi som ikke kan reassignes. NB: For arrays og objekter kan innholdet fortsatt endres.

Eksempel:
const PI = 3.14;

## Funksjoner (Functions)

- function – Nøkkelord som brukes til å erklære en funksjon.

function navnPaFunksjon() {} – Funksjonserklæring.

- () – Brukes til å definere eller sende inn parametere/argumenter.

- {} – Inneholder funksjonens logikk, altså hva som skal skje når funksjonen kjører.

Eksempel:
function siHei(navn) {
console.log("Hei, " + navn);
}
siHei("Nora");

## Hendelseslytter (Event Listener)

- .addEventListener() – En metode som brukes for å lytte etter hendelser på HTML-elementer.

Første parameter: navnet på hendelsen, f.eks. "click".

Andre parameter: en callback-funksjon som skal kjøres når hendelsen skjer.

Eksempel:
let knapp = document.querySelector("button");
knapp.addEventListener("click", function () {
console.log("Knappen ble klikket!");
});
