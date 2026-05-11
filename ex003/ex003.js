function gerar() {
    let matriz = [];

    for (let i = 0; i < 4; i++) {
        matriz[i] = [];

        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }

    let maior = matriz[0][0];

    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 4; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }

    let html = "<table>";

    for (let i = 0; i < 4; i++) {
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
    document.getElementById("resultado").innerHTML = "<strong>Maior valor da matriz: </strong>" + maior;
}