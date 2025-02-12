// Étape 1

function choixNombre(){
    let givenNumber=Number(prompt("Coucou petite perruche! Devine un nombre entre 1 et 30"))
    return givenNumber
}
let givenNumber = choixNombre()

console.log(givenNumber)
    // Étape 2

function didIWin(givenNumber){
    if (givenNumber < 22){
        alert("C'est plus !")}
    else if (givenNumber > 22){
        alert("C'est moins !")} 
    else {
        alert("Bravo le veau! Tu as deviné le nombre")
    }
}
didIWin(givenNumber)

//    // Étape 3
// function gamePlay(didIWin, givenNumber){
//     if (didIWin(givenNumber) === true){
//         alert("Tu veux rejouer?")
//     } else {
//         for (;;) {
//             monPrompt()
//             didIWin(givenNumber)
//             if (givenNumber===22) {
//             break ;
//             console.log(givenNumber);
//             }
//     }
//     }
// }

   
        
// gamePlay(didIWin,givenNumber)