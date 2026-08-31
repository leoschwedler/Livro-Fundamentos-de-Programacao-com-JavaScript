const formulario = document.querySelector("#form");
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  const numero = Number(formulario.querySelector("#preco").value);
  const resultado = formulario.querySelector("#resultado");
  resultado.textContent = `
    Valor do Produto R$: ${numero}
    Á vista R$: ${numero - numero * 0.1}
    Ou 3x de R$: ${numero / 3}
  `;
});
