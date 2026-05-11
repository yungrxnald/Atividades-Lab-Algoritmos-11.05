function gerar() {

let matriz = [];

let valores = ["X", "O", ""];

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      let aleatorio = Math.floor(Math.random() * 3);
        matriz[i][j] = valores[aleatorio];
      }
  }

let html = "<table>";

for (let i = 0; i < 3; i++) {
  html += "<tr>";
  for (let j = 0; j < 3; j++) {
    html += `<td>${matriz[i][j]}</td>`;
  }

  html += "</tr>";
}

  html += "</table>";

document.getElementById("tabuleiro").innerHTML = html;

let vencedor = "";

for (let i = 0; i < 3; i++) {
  if (
    matriz[i][0] !== "" &&
    matriz[i][0] === matriz[i][1] &&
    matriz[i][1] === matriz[i][2]
  ) {
    vencedor = matriz[i][0];
  }
}

if (vencedor !== "") {
  document.getElementById("resultado").innerHTML = "O jogador " + vencedor + " venceu!";
  } else {
    document.getElementById("resultado").innerHTML = "Nenhum vencedor nas linhas.";
  }
}