console.log("HelloWorld! Look at my first JS!")

/**
 * kommentar
 */

var variable1; //Hallo Welt
let variable2 = 0;
variable2 = 1;


//Const bedeutet konstant und unveränderlich!
const variable3 = 2;
/**
 variable3 = 1; geht also nicht!
 */

const ilker = "IlkerDosSantos Crunchy Chicken"
console.log(ilker)

//In Java = Methoden
//In JavaScript = Funktionen

//KEINEN RÜckgabewert in JavaScript Funktionen
//Parameter = Begrüßung von jemandem in diesen Fall
function myFirstFunctionWhichSaysHello(someoneToGreet: string): string{
    //Funktionsrumpf
    return "Hallo, ich spreche dich jetzt an! " + someoneToGreet;
}
// Hier habe ich die gesamte Funktion einer Variable zugeordnet
const helloFunction: string = myFirstFunctionWhichSaysHello(ilker)

console.log(helloFunction)

let myNumber: number = 20;
//Funktioniert nicht, da Ziffer verlangt wird und nicht String
//Fehler kommt zur Kompilierzeit
//myNumber =" 21"