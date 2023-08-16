function consultaPosicao(valor) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];
    const posicao = listaDeElementos.indexOf(valor);

    if (posicao !== -1) {
        return `O valor procurado está na posição ${posicao}`;
    } else {
        return `Valor não encontrado`;
    }
}
console.log(consultaPosicao(11));
console.log(consultaPosicao("11"));