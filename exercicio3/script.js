function retornarTipoElemento(valorInteiro) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]

    if (valorInteiro >= 0 && valorInteiro < listaDeElementos.length) {
        alert(`O elemento ${listaDeElementos[valorInteiro]} é um elemento do tipo ${typeof listaDeElementos[valorInteiro]}`)
    } else {
        alert(`O elemento ${valorInteiro} é um elemento do tipo ${typeof valorInteiro}`)
    }
}
console.log(retornarTipoElemento(5));