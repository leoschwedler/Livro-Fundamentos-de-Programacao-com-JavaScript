const button = document.querySelector("#botao");
button.addEventListener("click", () => {
  const valor = Number(document.querySelector("#valor").value);
  const resultado = document.querySelector("#resultado");
  const clientes = document.querySelector("#clientes").value;

  resultado.textContent = `Valor por cliente: ${valor / clientes}`;
});
