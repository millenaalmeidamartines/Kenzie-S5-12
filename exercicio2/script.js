function retornaValorEspecifico(valorInteiro) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];

    if (valorInteiro >= 0 && valorInteiro < listaDeElementos.length) {
        return `O valor contido nesta posição é: ${listaDeElementos[valorInteiro]}`;
    } else {
        return `Digite um valor inteiro de 0 a 7`;
    }
}
console.log(retornaValorEspecifico(9));