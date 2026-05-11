let cinema = [];

function inicializarCinema() {
  for (let i = 0; i < 5; i++) {
    cinema[i] = [];
    for (let j = 0; j < 5; j++) {
      cinema[i][j] = "Livre";
    }
  }
}

inicializarCinema();

function atualizar() {

  let html = "<table>";

  for (let i = 0; i < 5; i++) {
    html += "<tr>";
    for (let j = 0; j < 5; j++) {
      let classe = cinema[i][j] === "Livre" ? "livre" : "ocupada";
      html += `<td class="${classe}">
                ${cinema[i][j]}<br>
                (${i},${j})
              </td>`;
    }

    html += "</tr>";
  }

  html += "</table>";

  document.getElementById("tabela").innerHTML = html;
}

function iniciar() {

let continuar = true;

while (continuar) {

  let linha = parseInt(prompt("Digite a linha (0 a 4) ou número negativo para sair:"));

  if (linha < 0) break;

  let coluna = parseInt(prompt("Digite a coluna (0 a 4) ou número negativo para sair:"));

  if (coluna < 0) break;

  if (linha > 4 || coluna > 4) {
    alert("Posição inválida!");
    continue;
  }

  if (cinema[linha][coluna] === "Livre") {
    cinema[linha][coluna] = "Ocupada";
    alert("Reserva realizada com sucesso!");
  } else {
    alert("Essa poltrona já está ocupada!");
  }

atualizar();
}

document.getElementById("mensagem").innerHTML = "Sistema de reservas encerrado.";
}

atualizar();