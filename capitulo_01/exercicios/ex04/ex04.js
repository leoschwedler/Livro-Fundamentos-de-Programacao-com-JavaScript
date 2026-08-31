const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numero1 = Number(form.querySelector("#nota1").value);
  const numero2 = Number(form.querySelector("#nota2").value);
  const resultado = form.querySelector("#resultado");

  resultado.textContent =
    `1 Nota: ${numero1} \n` +
    `2 Nota: ${numero2} \n` +
    `Média: ${(numero1 + numero2) / 2}`;
});
