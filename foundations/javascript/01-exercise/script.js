
function add7(number) {
return number + 7;
}

function multiply(numberA, numberB) {
    return numberA * numberB;
}

function capitalize(string) {
   let firstLetter = string.charAt(0).toUpperCase();
   return firstLetter;
}

function lastLetter(string) {
for(let i=0; i<string.length; i++) {
    if(i == string.length -1 ) {
        let letter = string.charAt(i).toUpperCase();
        return letter;
    }
}
}