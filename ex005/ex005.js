function gerar() {
let matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) + 1;
        }
    }

    let html = "<table>";

    for (let i = 0; i < 3; i++) {
        html += "<tr>";
        for (let j = 0; j < 4; j++) {
            if (j < 3) {
                html += `<td>${matriz[i][j]}</td>`;
            } else {
                html += `<td>${matriz[i][j]}</td>`;
            }
        }
        html += "</tr>";
    }
    html += "</table>";

    document.getElementById("tabela").innerHTML = html;

    let resultado = "";

    for (let i = 0; i < 3; i++) {
        let soma = 0;
        for (let j = 0; j < 4; j++) {
            soma += matriz[i][j];
        }
        resultado += `Soma da linha ${i + 1}: ${soma}<br>`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}