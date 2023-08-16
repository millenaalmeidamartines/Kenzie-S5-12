function removeUltimoElementoString() {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];

    if (listaDeElementos.length === 0) {
        return `Falha ao remover o elemento da lista`
    }

    const ultimoElemento = listaDeElementos[listaDeElementos.length - 1];

    if (typeof ultimoElemento === 'string') {
        listaDeElementos.pop();
        return `Elemento deletado com sucesso`
    } else {
        return `Falha ao remover o elemento da lista`
    }
}
console.log(removeUltimoElementoString());