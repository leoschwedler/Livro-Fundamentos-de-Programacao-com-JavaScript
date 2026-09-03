const form = document.querySelector("form");
const limpar = document.querySelector("#limpar");
const resultado = document.querySelector("#resultado");

limpar.addEventListener("click", () => {
  resultado.value = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const buffet = document.querySelector("#buffet").value;
  const consumo = document.querySelector("#consumo").value;
  const valorPagar = (consumo / 1000) * buffet;
  resultado.textContent = `Valor a pagar R$: ${valorPagar.toFixed(2)}`;
});
