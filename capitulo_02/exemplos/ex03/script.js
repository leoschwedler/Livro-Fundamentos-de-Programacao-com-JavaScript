const form = document.querySelector("form");
const limpar = document.querySelector("#limpar");
const resultado = document.querySelector("#resultado");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const veiculo = form.querySelector("#veiculo").value;
  const preco = Number(document.querySelector("#preco").value);
  console.log(preco);
  const metadePreco = preco / 2;
  resultado.innerHTML = `
  Promocao: ${veiculo}<br>
  Entrada de R$ ${metadePreco.toFixed(2)}<br>
  +12x de R$ ${metadePreco / 12}
  `;
});
