const buttonEnviar = document.querySelector("#enviar");
const buttonLimpar = document.querySelector("#limpar");

buttonEnviar.addEventListener("click", () => {
  const titulo = document.querySelector("#titulo").value;
  const duracao = Number(document.querySelector("#duracao").value);
  const resultado = document.querySelector("#resultado");

  const hora = Math.floor(duracao / 60);
  const minutos = duracao % 60;

  resultado.innerHTML = `
    Titutlo do Filme: ${titulo}<br>
    ${hora} hora(s) e ${minutos} minutos(s)`;
});

buttonLimpar.addEventListener("click", () => {
  titulo.value = "";
  duracao.value = "";
  resultado.value = "";
});
