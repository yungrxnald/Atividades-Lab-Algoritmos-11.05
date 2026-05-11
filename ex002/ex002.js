function gerar() {
    let matriz = [];
    let soma = 0;

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];

        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 9) + 1;

            soma += matriz[i][j];

        }
    }

    let saida = "<strong>Matriz:</strong><br><br>";

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
            if (j < 2) {
                saida += matriz[i][j] + ", ";
        } else {
                saida += matriz[i][j];
        }
    }
        saida += "<br>";
    }

    saida += "<br><strong>Soma total da matriz: </strong>" + soma;

    document.getElementById("resultado").innerHTML = saida;
}