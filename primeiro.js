function isFibonacci(num) {
    
    let a = 0;
    let b = 1;

  
    if (num === 0 || num === 1) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    
    if (b === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} NÃO pertence à sequência de Fibonacci.`;
    }
}


let num = 21; 
console.log(isFibonacci(num));
