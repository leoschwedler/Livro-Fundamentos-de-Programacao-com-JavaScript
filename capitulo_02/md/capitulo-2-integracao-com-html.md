# Capítulo 2 — Integração com HTML

> **Livro:** Lógica de Programação e Algoritmos com JavaScript  
> **Autor:** Edécio Fernando Iepsen  
> **Capítulo:** 2 — Integração com HTML

---

## 1. Visão geral do capítulo

No capítulo 1, os programas JavaScript foram trabalhados de forma mais isolada, utilizando recursos como `prompt()` e `alert()`.

No capítulo 2, o JavaScript passa a trabalhar **junto com uma página HTML**.

A ideia central é:

```text
HTML → estrutura e conteúdo da página
JavaScript → comportamento e processamento
```

Com essa integração, o usuário pode:

1. preencher campos HTML;
2. clicar em um botão;
3. disparar um evento;
4. o JavaScript ler os dados;
5. realizar um processamento;
6. exibir o resultado novamente na página.

Um fluxo muito comum é:

```text
Usuário
   ↓
Campo HTML
   ↓
Evento
   ↓
JavaScript
   ↓
Processamento
   ↓
Resultado no HTML
```

---

# 2.1 Estrutura básica de um documento HTML

Uma página HTML possui uma estrutura básica.

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Minha página</title>
</head>

<body>

    <h1>Minha página</h1>
    <p>Olá, mundo!</p>

</body>

</html>
```

## `<!DOCTYPE html>`

Informa ao navegador que o documento utiliza HTML5.

```html
<!DOCTYPE html>
```

## `<html>`

É o elemento que engloba toda a página.

```html
<html lang="pt-br">
```

O atributo `lang` informa o idioma principal do documento.

## `<head>`

Contém informações e configurações da página que não representam diretamente o conteúdo principal exibido.

Exemplo:

```html
<head>
    <meta charset="UTF-8">
    <title>Minha página</title>
</head>
```

## `<meta charset="UTF-8">`

Define a codificação dos caracteres.

É importante para que caracteres como:

```text
á
ç
ã
é
```

sejam exibidos corretamente.

## `<title>`

Define o título exibido na aba do navegador.

```html
<title>Calculadora</title>
```

## `<body>`

Contém o conteúdo visível da página.

```html
<body>
    <h1>Calculadora</h1>
    <p>Informe um valor:</p>
</body>
```

---

# 2.2 Cabeçalhos, parágrafos e campos de formulário

O capítulo começa a utilizar HTML como uma interface para os programas JavaScript.

## Cabeçalhos

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Outro título</h3>
```

Para os exercícios iniciais, o mais importante é saber utilizar o elemento que será manipulado pelo JavaScript.

## Parágrafos

```html
<p id="resultado"></p>
```

O `id` é extremamente importante porque permite identificar esse elemento no JavaScript.

---

## Campos de formulário

Um campo pode ser criado com:

```html
<input type="text" id="nome">
```

Ou para números:

```html
<input type="number" id="preco">
```

Um botão:

```html
<button id="btn">Calcular</button>
```

Uma estrutura simples:

```html
<label for="preco">Preço:</label>
<input type="number" id="preco">

<button id="btn">Calcular</button>

<p id="resultado"></p>
```

A partir daqui, o JavaScript pode:

- localizar `#preco`;
- pegar o valor digitado;
- transformar o valor em número;
- realizar cálculos;
- localizar `#resultado`;
- mostrar o resultado.

---

# 2.3 Introdução a eventos e funções

Um **evento** é uma ação que acontece na página.

Exemplos:

- clique em um botão;
- alteração de um campo;
- movimento do mouse;
- envio de formulário;
- pressionamento de uma tecla.

Um dos eventos mais importantes para os exercícios é:

```text
click
```

Ele ocorre quando o usuário clica em um elemento.

---

## Funções

Uma função é um bloco de código que executa uma determinada tarefa.

```js
function calcular() {
    console.log("Calculando...");
}
```

A função pode ser executada quando um evento acontece.

```js
botao.addEventListener("click", calcular);
```

Também podemos utilizar uma função anônima:

```js
botao.addEventListener("click", () => {
    console.log("Botão clicado!");
});
```

---

# 2.4 Método `getElementById()`

Para o JavaScript conseguir trabalhar com um elemento HTML, precisamos primeiro obter uma referência para ele.

No HTML:

```html
<input id="preco">
```

No JavaScript:

```js
const preco = document.getElementById("preco");
```

O método:

```js
document.getElementById("preco")
```

procura no documento HTML um elemento cujo `id` seja:

```text
preco
```

---

## Exemplo completo

HTML:

```html
<input id="nome">
```

JavaScript:

```js
const nome = document.getElementById("nome");
```

Agora `nome` representa a referência ao elemento HTML.

---

## Regra importante

No HTML:

```html
id="preco"
```

No JavaScript:

```js
document.getElementById("preco")
```

Não colocamos `#` no `getElementById()`.

Correto:

```js
document.getElementById("preco");
```

Incorreto:

```js
document.getElementById("#preco");
```

---

# 2.5 Propriedades `textContent`, `innerHTML` e `value`

Depois de obter uma referência para um elemento HTML, podemos acessar ou modificar suas propriedades.

As três propriedades importantes deste capítulo são:

```text
value
textContent
innerHTML
```

---

## `value`

É utilizada principalmente para acessar o valor de campos de formulário.

HTML:

```html
<input id="nome">
```

JavaScript:

```js
const nome = document.getElementById("nome");

console.log(nome.value);
```

Se o usuário digitou:

```text
Leonardo
```

então:

```js
nome.value
```

retorna:

```text
"Leonardo"
```

### Importante

Valores obtidos de campos HTML normalmente chegam como **string**.

Por exemplo:

```js
const numero = document.getElementById("numero").value;
```

Mesmo que o usuário tenha digitado:

```text
10
```

o valor obtido é tratado como texto.

Para realizar cálculos, normalmente fazemos:

```js
const numero = Number(
    document.getElementById("numero").value
);
```

---

# `textContent`

É utilizada para ler ou alterar o texto de um elemento.

HTML:

```html
<p id="resultado"></p>
```

JavaScript:

```js
const resultado = document.getElementById("resultado");

resultado.textContent = "Olá!";
```

O navegador exibirá:

```text
Olá!
```

Também podemos colocar uma variável:

```js
const nome = "Leonardo";

resultado.textContent = `Olá, ${nome}!`;
```

---

## `textContent` para resultados

Um padrão muito utilizado:

```js
const resultado = document.getElementById("resultado");

resultado.textContent = `Resultado: ${numero}`;
```

---

# `innerHTML`

Permite inserir HTML dentro de um elemento.

Exemplo:

```js
resultado.innerHTML = "<strong>Resultado:</strong> 10";
```

Nesse caso, `<strong>` será interpretado como HTML.

Já com:

```js
resultado.textContent = "<strong>Resultado:</strong> 10";
```

o conteúdo será tratado como texto.

### Regra prática

Para simplesmente exibir texto:

```js
textContent
```

Para inserir HTML de forma intencional:

```js
innerHTML
```

Para os exercícios deste capítulo, `textContent` é frequentemente suficiente e é uma opção mais segura quando o conteúdo deve ser apenas texto.

---

# 2.6 Formas de adicionar JavaScript ao HTML

O capítulo apresenta diferentes maneiras de conectar JavaScript e HTML.

---

## Forma 1 — JavaScript dentro do HTML

Podemos colocar JavaScript dentro de uma tag:

```html
<script>
    console.log("Olá!");
</script>
```

Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-br">

<body>

    <h1>Minha página</h1>

    <script>
        console.log("JavaScript funcionando!");
    </script>

</body>

</html>
```

Funciona, mas em projetos maiores separar HTML e JavaScript costuma ser uma prática melhor.

---

# Forma 2 — Evento diretamente no HTML

Podemos colocar o evento no próprio elemento.

```html
<button onclick="mostrarMensagem()">
    Clique
</button>
```

E no JavaScript:

```js
function mostrarMensagem() {
    alert("Botão clicado!");
}
```

Outro exemplo:

```html
<input onchange="alterouCampo()">
```

A ideia é associar diretamente o evento à tag.

---

# Forma 3 — Eventos DOM

Outra abordagem é localizar o elemento pelo JavaScript e associar o evento através de uma propriedade.

```js
const botao = document.getElementById("btn");

botao.onclick = function () {
    console.log("Clicou!");
};
```

Essa abordagem separa mais o HTML do JavaScript.

---

# Forma 4 — `addEventListener()`

É a abordagem que será mais importante para os seus estudos.

```js
const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});
```

A estrutura é:

```js
elemento.addEventListener("evento", função);
```

Exemplo:

```js
botao.addEventListener("click", () => {
    // código executado quando ocorrer o clique
});
```

---

## Por que não usamos `onclick` dentro do `addEventListener`?

Com:

```js
addEventListener("click", ...)
```

usamos apenas:

```text
click
```

Não:

```text
onclick
```

Isso acontece porque `onclick` é o nome da propriedade/event handler, enquanto o `addEventListener()` recebe o nome do evento.

---

## Vários listeners

Uma vantagem importante do `addEventListener()` é permitir registrar diferentes funções para o mesmo evento.

```js
botao.addEventListener("click", () => {
    console.log("Função 1");
});

botao.addEventListener("click", () => {
    console.log("Função 2");
});
```

As duas serão executadas quando ocorrer o clique.

---

# 2.7 Nomenclatura e escopo das variáveis

O capítulo também trabalha conceitos importantes sobre variáveis.

## Nomes de variáveis

Prefira nomes que expliquem o que está sendo armazenado:

```js
const precoProduto = 100;
const numeroPessoas = 3;
const valorTotal = 300;
```

Evite:

```js
const x = 100;
const a = 3;
const y = 300;
```

quando nomes mais claros forem possíveis.

---

## `const`

Use quando a variável não será reatribuída:

```js
const preco = 100;
```

Você não pode fazer:

```js
preco = 200;
```

---

## `let`

Use quando o valor poderá ser alterado:

```js
let total = 0;

total = 100;
```

---

## Escopo

O escopo determina onde uma variável pode ser acessada.

Uma variável criada dentro de um bloco:

```js
{
    const nome = "Leonardo";
}
```

não pode ser acessada fora dele.

Funções também criam seus próprios escopos.

---

# 2.8 Operadores aritméticos e funções matemáticas

O capítulo retoma operações matemáticas para criar programas integrados ao HTML.

## Operadores

### Soma

```js
a + b
```

### Subtração

```js
a - b
```

### Multiplicação

```js
a * b
```

### Divisão

```js
a / b
```

### Módulo

```js
a % b
```

O módulo retorna o resto da divisão.

Exemplo:

```js
10 % 3
```

Resultado:

```text
1
```

Isso será muito importante em exercícios como:

- verificar par ou ímpar;
- trabalhar com horas e minutos;
- distribuir valores;
- calcular restos.

---

## Precedência dos operadores

O JavaScript segue uma ordem para executar operações.

Por exemplo:

```js
10 + 20 / 2
```

primeiro:

```text
20 / 2 = 10
```

depois:

```text
10 + 10 = 20
```

Se quisermos somar primeiro:

```js
(10 + 20) / 2
```

Resultado:

```text
15
```

### Regra

Quando a ordem da operação for importante, use parênteses.

---

# `Math`

JavaScript possui o objeto `Math` para operações matemáticas.

## Raiz quadrada

```js
Math.sqrt(25)
```

Resultado:

```text
5
```

## Arredondar para baixo

```js
Math.floor(4.9)
```

Resultado:

```text
4
```

## Arredondar para cima

```js
Math.ceil(4.1)
```

Resultado:

```text
5
```

## Arredondamento convencional

```js
Math.round(4.5)
```

Resultado:

```text
5
```

## Potência

```js
Math.pow(2, 3)
```

Resultado:

```text
8
```

Em JavaScript moderno também podemos utilizar:

```js
2 ** 3
```

---

# 2.9 Exemplos de programas JavaScript integrados com HTML

Aqui está a ideia central do capítulo colocada em prática.

---

## Exemplo 1 — Calcular preço com desconto

### HTML

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Preço</title>
</head>

<body>

    <label for="preco">Preço do produto:</label>
    <input type="number" id="preco">

    <button id="btn">Calcular</button>

    <p id="resultado"></p>

    <script src="script.js"></script>

</body>

</html>
```

### JavaScript

```js
const preco = document.getElementById("preco");
const botao = document.getElementById("btn");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const valor = Number(preco.value);

    const desconto = valor * 0.10;
    const valorFinal = valor - desconto;

    resultado.textContent =
        `Preço: R$ ${valor}
         Desconto: R$ ${desconto}
         Valor final: R$ ${valorFinal}`;
});
```

Se necessário, podemos usar CSS para preservar as quebras de linha:

```css
#resultado {
    white-space: pre-line;
}
```

---

# Exemplo 2 — Média de duas notas

HTML:

```html
<input type="number" id="nota1">
<input type="number" id="nota2">

<button id="btn">Calcular média</button>

<p id="resultado"></p>
```

JavaScript:

```js
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const botao = document.getElementById("btn");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const numero1 = Number(nota1.value);
    const numero2 = Number(nota2.value);

    const media = (numero1 + numero2) / 2;

    resultado.textContent = `Média: ${media}`;
});
```

Observe os parênteses:

```js
(numero1 + numero2) / 2
```

Eles são necessários para que a soma aconteça antes da divisão.

---

# Exemplo 3 — Converter minutos para horas

Imagine:

```text
Duração: 150 minutos
```

Queremos:

```text
2 horas e 30 minutos
```

JavaScript:

```js
const minutos = 150;

const horas = Math.floor(minutos / 60);
const minutosRestantes = minutos % 60;

console.log(`${horas} horas e ${minutosRestantes} minutos`);
```

Resultado:

```text
2 horas e 30 minutos
```

### Por que usamos `%`?

Porque:

```js
150 % 60
```

retorna:

```text
30
```

que é o restante depois de retirar as horas completas.

---

# Exemplo 4 — Entrada, processamento e saída

Este é um dos padrões mais importantes de todo o livro.

## Entrada

Dados fornecidos pelo usuário:

```js
const numero = Number(input.value);
```

## Processamento

Cálculo ou transformação:

```js
const dobro = numero * 2;
```

## Saída

Resultado apresentado ao usuário:

```js
resultado.textContent = `Dobro: ${dobro}`;
```

Portanto:

```text
ENTRADA → PROCESSAMENTO → SAÍDA
```

Exemplo:

```js
const numero = Number(input.value);

const dobro = numero * 2;

resultado.textContent = `Dobro: ${dobro}`;
```

---

# 2.10 Exercícios e padrão de resolução

Os exercícios do capítulo utilizam problemas simples para praticar a integração entre HTML e JavaScript.

O objetivo principal não é criar páginas visualmente sofisticadas.

O foco é aprender a construir um programa que:

```text
recebe dados do HTML
        ↓
processa os dados
        ↓
devolve uma resposta ao HTML
```

Entre os exemplos/exercícios do capítulo aparecem problemas envolvendo contextos como:

- vídeo locadora;
- revenda de veículos;
- restaurante;
- farmácia;
- lan house;
- supermercado.

Esses exercícios servem para praticar entrada, processamento e saída utilizando elementos HTML.

---

# 2.11 Considerações finais

Ao terminar este capítulo, você deve conseguir construir uma aplicação simples em que o usuário interage com uma página HTML e o JavaScript processa os dados.

O fluxo fundamental é:

```text
HTML
 ↓
Elemento identificado por id
 ↓
JavaScript encontra o elemento
 ↓
Evento acontece
 ↓
Função é executada
 ↓
value fornece os dados de entrada
 ↓
JavaScript realiza o processamento
 ↓
textContent apresenta a saída
```

---

# 3. Modelo mental para memorizar o capítulo

Quando estiver fazendo um exercício, pense nesta sequência:

## 1. O que o usuário precisa informar?

Exemplo:

```text
Preço
```

Crie:

```html
<input id="preco">
```

## 2. Qual elemento vai iniciar o programa?

Normalmente um botão:

```html
<button id="btn">Calcular</button>
```

## 3. Onde o resultado será exibido?

```html
<p id="resultado"></p>
```

## 4. Como encontrar os elementos?

```js
const preco = document.getElementById("preco");
const botao = document.getElementById("btn");
const resultado = document.getElementById("resultado");
```

## 5. Qual evento dispara o código?

```js
botao.addEventListener("click", () => {

});
```

## 6. Como pegar o valor?

```js
const valor = Number(preco.value);
```

## 7. Qual é o processamento?

```js
const resultadoFinal = valor * 2;
```

## 8. Como exibir?

```js
resultado.textContent = `Resultado: ${resultadoFinal}`;
```

---

# 4. Padrão-base dos exercícios

Este é um modelo que você pode usar como referência:

```html
<input id="entrada">

<button id="btn">Executar</button>

<p id="resultado"></p>

<script src="script.js"></script>
```

```js
const entrada = document.getElementById("entrada");
const botao = document.getElementById("btn");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const valor = Number(entrada.value);

    // processamento

    resultado.textContent = `Resultado: ${valor}`;
});
```

Não decore apenas o código.

Entenda o fluxo:

```text
document
   ↓
getElementById()
   ↓
elemento HTML
   ↓
evento
   ↓
value
   ↓
processamento
   ↓
textContent
```

---

# 5. Erros comuns

## Erro 1 — Esquecer o `Number()`

```js
const numero1 = input1.value;
const numero2 = input2.value;

const resultado = numero1 + numero2;
```

Se os valores forem `"10"` e `"20"`, podemos obter:

```text
1020
```

porque os valores são strings.

Prefira:

```js
const numero1 = Number(input1.value);
const numero2 = Number(input2.value);

const resultado = numero1 + numero2;
```

---

## Erro 2 — Usar `#` no `getElementById()`

Errado:

```js
document.getElementById("#preco");
```

Correto:

```js
document.getElementById("preco");
```

---

## Erro 3 — Confundir `value` e `textContent`

Para campo de entrada:

```js
input.value
```

Para texto de um elemento:

```js
resultado.textContent
```

---

## Erro 4 — Esquecer o `()` da função

Errado:

```js
botao.addEventListener("click", calcular());
```

Isso executa `calcular()` imediatamente.

Normalmente queremos passar a função para ser executada quando o evento acontecer:

```js
botao.addEventListener("click", calcular);
```

Ou:

```js
botao.addEventListener("click", () => {
    calcular();
});
```

---

## Erro 5 — Errar a precedência matemática

Errado para média:

```js
nota1 + nota2 / 2
```

Correto:

```js
(nota1 + nota2) / 2
```

---

## Erro 6 — JavaScript não encontrar o elemento

Se você possui:

```html
<p id="resultado"></p>
```

deve procurar:

```js
document.getElementById("resultado");
```

O nome precisa corresponder exatamente.

---

# 6. Checklist do capítulo

Antes de considerar o capítulo dominado, você deve saber explicar:

- [ ] O papel do HTML.
- [ ] O papel do JavaScript.
- [ ] A estrutura básica de um documento HTML.
- [ ] O que é um `id`.
- [ ] Como localizar um elemento com `getElementById()`.
- [ ] O que é um evento.
- [ ] O que é uma função.
- [ ] Como usar `addEventListener()`.
- [ ] O que significa `click`.
- [ ] Como obter dados de um `<input>` usando `value`.
- [ ] Por que geralmente usamos `Number(input.value)` para cálculos.
- [ ] Como exibir texto usando `textContent`.
- [ ] Diferença básica entre `textContent` e `innerHTML`.
- [ ] Como conectar um arquivo `.js` ao HTML.
- [ ] O conceito de entrada, processamento e saída.
- [ ] Operadores `+`, `-`, `*`, `/` e `%`.
- [ ] Precedência de operadores.
- [ ] Uso de parênteses em expressões.
- [ ] Uso básico do objeto `Math`.
- [ ] Escopo básico de variáveis.
- [ ] Diferença entre `let` e `const`.

---

# 7. Resumo rápido para consulta

| Conceito | Exemplo |
|---|---|
| Localizar elemento | `document.getElementById("id")` |
| Valor de input | `input.value` |
| Converter para número | `Number(input.value)` |
| Alterar texto | `elemento.textContent = "Texto"` |
| Inserir HTML | `elemento.innerHTML = "<strong>Texto</strong>"` |
| Evento | `"click"` |
| Listener | `elemento.addEventListener("click", funcao)` |
| Função | `function calcular() {}` |
| Função anônima | `() => {}` |
| Soma | `a + b` |
| Subtração | `a - b` |
| Multiplicação | `a * b` |
| Divisão | `a / b` |
| Resto | `a % b` |
| Raiz | `Math.sqrt(x)` |
| Arredondar para baixo | `Math.floor(x)` |
| Arredondar para cima | `Math.ceil(x)` |
| Arredondamento | `Math.round(x)` |

---

# 8. O que este capítulo prepara para os próximos

Este capítulo é importante porque estabelece a base para os próximos conteúdos.

Você aprende a fazer:

```text
USUÁRIO
  ↓
HTML
  ↓
JAVASCRIPT
  ↓
PROCESSAMENTO
  ↓
HTML
```

Depois, nos capítulos seguintes, o processamento ficará mais complexo.

Por exemplo:

```text
Capítulo 2
Entrada → processamento simples → saída

Capítulo 3
Entrada → condições → saída

Capítulo 4
Entrada → repetições → saída

Capítulo 5
Entrada → vetores → processamento → saída
```

Por isso, dominar a integração com HTML é importante antes de avançar.

---

# 9. Regra de ouro do capítulo

Sempre que receber um exercício, primeiro identifique:

```text
1. ENTRADA
2. PROCESSAMENTO
3. SAÍDA
```

Depois transforme isso em:

```text
ENTRADA
→ elementos HTML + value

PROCESSAMENTO
→ variáveis + operadores + Math

SAÍDA
→ textContent
```

E, por fim, descubra:

```text
Qual evento vai iniciar o processamento?
```

Na maioria dos exercícios iniciais:

```js
botao.addEventListener("click", () => {
    // programa
});
```

Esse raciocínio é mais importante do que decorar qualquer código específico.
