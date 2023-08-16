function inserirNaPosicaoCorreta(valor) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];

    if (typeof valor === "number") {
        listaDeElementos.unshift(valor);
    } else if (typeof valor === "string") {
        listaDeElementos.push(valor);
    }
    return `Lista atualizada com sucesso ${listaDeElementos}`
}
console.log(inserirNaPosicaoCorreta(2));