function gerar() {

let matrizOriginal = [];

for (let i = 0; i < 2; i++) {
  matrizOriginal[i] = [];
    for (let j = 0; j < 3; j++) {
      matrizOriginal[i][j] =
        Math.floor(Math.random() * 20) + 1;
      }
    }

let matrizTransposta = [];

for (let j = 0; j < 3; j++) {
  matrizTransposta[j] = [];
    for (let i = 0; i < 2; i++) {
      matrizTransposta[j][i] =
        matrizOriginal[i][j];
    }
  }

function criarTabela(matriz) {

  let html = "<table>";

  for (let i = 0; i < matriz.length; i++) {
    html += "<tr>";
      for (let j = 0; j < matriz[i].length; j++) {
        html += `<td>${matriz[i][j]}</td>`;
      }

      html += "</tr>";
    }

    html += "</table>";

    return html;
  }

  document.getElementById("original").innerHTML = "<h3>Matriz Original (2x3)</h3>" + criarTabela(matrizOriginal);

  document.getElementById("transposta").innerHTML = "<h3>Matriz Transposta (3x2)</h3>" + criarTabela(matrizTransposta);
}