function fibonacci(n){
    let lista = [0, 1];
    for (i = 1; i < n; i++) {
        let numero = lista[i - 1] + lista[i];
        lista.push(numero);
    };
    return lista[n];
};