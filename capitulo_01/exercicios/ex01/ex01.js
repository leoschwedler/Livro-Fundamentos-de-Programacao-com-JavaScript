const formulario = document.querySelector("#form");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const numero = Number(document.querySelector("#numero").value);
  const resultado = document.querySelector("#resultado");
  resultado.textContent = `
   Numero: ${numero} \n
   Vizinhos ${numero - 1} e ${numero + 1}
  `;
});
