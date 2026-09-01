const form = document.querySelector("#form");
const resultado = document.querySelector("#outResultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = form.inNome.value;
  resultado.textContent = `Ola ${nome}`;
});
