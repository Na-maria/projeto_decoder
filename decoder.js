const vogais = ["a", "e", "i", "o", "u"];
const substitutos = ["ai", "enter", "imes", "ober", "ufat"];

function limparSaida() {
  document.getElementById("output-title-empty-id").textContent = "";
  document.getElementById("output-empty-id").style.display = "none";

  let outputTitleEmpty = document.getElementById("output-title-empty");
  let outputEmpty = document.getElementById("output-empty");

  if (outputTitleEmpty) {
    outputTitleEmpty.textContent = "";
  }

  if (outputEmpty) {
    outputEmpty.style.display = "none";
  }
}

function criptografia(texto, vogais, substitutos) {
  let criptografiaVogais = vogais.reduce((obj, vogal, indice) => {
    obj[vogal] = substitutos[indice];
    return obj;
  }, {});

  const textoCriptografado = texto
    .split("")
    .map((letra) => {
      return (
        criptografiaVogais[letra.toLowerCase()] ||
        criptografiaVogais[letra.toUpperCase()] ||
        letra
      );
    })
    .join("");
  return textoCriptografado;
}

function decriptografia(texto) {
  let decriptografiaVogais = vogais.reduce((obj, vogal, indice) => {
    obj[substitutos[indice]] = vogal;
    return obj;
  }, {});

  const textoDecriptografado = texto
    .split(" ")
    .map((palavra) => decriptografiaVogais[palavra.toLowerCase()] || palavra)
    .join(" ");
  return textoDecriptografado;
}

function transformarVogais() {
  let textoOriginal = document.getElementById("text").value;
  let textoTransformado = criptografia(textoOriginal, vogais, substitutos);
  document.getElementById("texto-criptografado").textContent =
    textoTransformado;
  console.log(textoTransformado);
}

function decripVogais() {
  let textoCriptografado = document.getElementById("text").value;
  let textoDecriptografado = decriptografia(
    textoCriptografado,
    vogais,
    substitutos
  );
  document.getElementById("texto-criptografado").textContent =
    textoDecriptografado;
  console.log(textoDecriptografado);
}

function copiar() {
  let paraCopiar = document.getElementById("texto-criptografado");
  let textoCopiar = paraCopiar.textContent;

  navigator.clipboard
    .writeText(textoCopiar)
    .then(() => {
      console.log("Texto copiado para a área de trasnferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar", err);
    });
}
function limparTexto() {
  document.getElementById("text").textContent = "";
}
