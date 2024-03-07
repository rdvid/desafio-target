const calculaFibonacci = (numero) => {
    let fibonacci = [0, 1];
    do {
        let index = fibonacci.length;
        let novoNumero = fibonacci[index - 1] + fibonacci[index - 2];
        if (novoNumero === numero) return true;
        fibonacci.push(novoNumero)
        console.log(novoNumero)
    } while (numero > fibonacci[fibonacci.length - 1]);
    return false;
}

console.log(calculaFibonacci(13))