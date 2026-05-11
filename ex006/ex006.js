function multiplicar() {

let multiplicador = parseInt(document.getElementById("multiplicador").value);

if (isNaN(multiplicador)) {
    alert("Por favor, insira um número válido.");
    return;
}

let matriz = [];

for (let i = 0; i < 2; i++) {
    matriz[i] = [];
    for (let j = 0; j < 2; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10) + 1;
    }
}

let novaMatriz = [];

for (let i = 0; i < 2; i++) {
    novaMatriz.push([]);
    for (let j = 0; j < 2; j++) {
        novaMatriz[i][j] = matriz[i][j] * multiplicador;
    }
}

function criarTabela(m) {
    let html = "<table>";

    for (let i = 0; i < m.length; i++) {
        html += "<tr>";
        for (let j = 0; j < m[i].length; j++) {
            if (j < m[i].length - 1) {
                html += `<td>${m[i][j]},</td>`;
            } else {
                html += `<td>${m[i][j]}</td>`;
            }
        }
        html += "</tr>";
    }
    html += "</table>";
    return html;
}

document.getElementById("resultado").innerHTML = "<h3>Matriz Original:</h3>" + criarTabela(matriz) + "<h3>Nova Matriz multiplicada por " + multiplicador + ":</h3>" + criarTabela(novaMatriz);

}