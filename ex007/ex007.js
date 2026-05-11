function gerarMatriz() {

let n = parseInt(document.getElementById("tamanho").value);

if (isNaN(n) || n <= 0) {
  alert("Digite um número válido!");
  return;
}

let matriz = [];

for (let i = 0; i < n; i++) {
matriz[i] = [];
for (let j = 0; j < n; j++) {
  if (i === j) {
    matriz[i][j] = 1;
    } else {
      matriz[i][j] = 0;
    }
  }
}

let html = "<table>";

for (let i = 0; i < n; i++) {
  html += "<tr>";
  for (let j = 0; j < n; j++) {
    if (i === j) {
      html += `<td class="diagonal">${matriz[i][j]},</td>`;
    } else {
      html += `<td>${matriz[i][j]},</td>`;
    }
  }

  html += "</tr>";

}

  html += "</table>";

document.getElementById("resultado").innerHTML = html;

}