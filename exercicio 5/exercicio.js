const inverteString = (palavra) => {
    let palavraArray = palavra.split('');
    let palavraInversa = [];
    for(letra of palavraArray){
        palavraInversa.unshift(letra);
    }
    return palavraInversa.join('');
} 

console.log(inverteString('antedeguemon'))