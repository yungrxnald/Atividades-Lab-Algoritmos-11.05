function gerar() {
    let matriz = [];
    let diagonal = [];

    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Math.floor(Math.random() * 50) + 1;
            if (i === j) {
                diagonal.push(matriz[i][j]);
            }
        }
    }

    let html = "<table>";

    for (let i = 0; i < 4; i++) {
        html += "<tr>";
        for (let j = 0; j < 4; j++) {
            if (i === j) {
                html += `<td class="diagonal">${matriz[i][j]}</td>`;
            } else {
                html += `<td>${matriz[i][j]}</td>`;
            }
        }
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("tabela").innerHTML = html;
    document.getElementById("resultado").innerHTML = "<strong>Elementos da diagonal principal: </strong>" + diagonal.join(", ");
}