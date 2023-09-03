const PHONE = "5528999814672";
const EMAIL = "rafaeljwerneck43@gmail.com";

function CarregarLinkWhatsApp() {
  let userAgent = window.navigator.userAgent;
  let elemento = document.getElementById("whatsappButton");
  let mensagem =
    "Olá Wiris, estou entrando em contato pelo seu Cartão de Visita Virtual e gostaria de conhecer mais do seu trabalho, podemos conversar sobre?";

  if (
    userAgent.includes("iPhone") ||
    userAgent.includes("Android") ||
    userAgent.includes("webOS") ||
    userAgent.includes("BlackBerry") ||
    userAgent.includes("iPod")
  ) {
    elemento.href = "whatsapp://send?phone=" + PHONE + "&text=" + mensagem;
  } else {
    elemento.href =
      "https://web.whatsapp.com/send?phone=" + PHONE + "&text=" + mensagem;
  }
}

function CarregarLinkEmail() {
  let elemento = document.getElementById("emailButton");
  elemento.href =
    "mailto:" + EMAIL + "?Subject=Contato%20by%20Digital%20Visit%20Card";
}

function CarregarLinkTelefone() {
  let elemento = document.getElementById("telefoneButton");
  elemento.href = "tel:" + PHONE;
}

function main() {
  CarregarLinkWhatsApp();
  CarregarLinkEmail();
  CarregarLinkTelefone();
}

document.addEventListener("DOMContentLoaded", main());
