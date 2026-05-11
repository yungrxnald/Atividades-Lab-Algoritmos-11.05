let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function mostrarMatriz() {

let saida = "";

for (let i = 0; i < matriz.length; i++) {

    for (let j = 0; j < matriz[i].length; j++) {

      saida += matriz[i][j] + " ";
    }

    saida += "<br>";
  }

  document.getElementById("resultado").innerHTML = saida;

  console.log(saida.replace(/<br>/g, "\n"));
}