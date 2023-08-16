function removerElementoEspecifico(valor) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];
    const posicao = listaDeElementos.indexOf(valor);

    if (posicao !== -1) {
        listaDeElementos.splice(posicao, 1);
        return `Elemento ${valor} deletado com sucesso`
    } else {
        return `Elemento não encontrado`
    }
}
console.log(removerElementoEspecifico(7));