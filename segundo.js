
function countLetterA(str) {
   
    let lowerStr = str.toLowerCase();
    let count = 0;

    
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 'a') {
            count++;
        }
    }

 
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}


let inputString = "JavaScript é uma linguagem fantástica!";
countLetterA(inputString);







