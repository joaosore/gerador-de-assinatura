import { phonemask } from "./mask.js";

var NOME;
var CARGO_1;
var CARGO_2;
var CARGO_3;
var TEL1;
var TEL2;
// var RAMAL;
var EMAIL;
var ENDERECO;
var REDES;

function getValores() {
  NOME = $("#nome").val();

  CARGO_1 = $("#cargo_1").val();
  CARGO_2 = $("#cargo_2").val();
  CARGO_3 = $("#cargo_3").val();

  TEL1 = $("#tel1").val();
  TEL2 = $("#tel2").val();
  // RAMAL = $("#ramal").val();
  EMAIL = $("#email").val();
  ENDERECO = $("#endereco").val();
  REDES = $("#redes").val();
  $("#btn-Convert-Html2Image").hide();
}

$("input").on("input", function() {
  getValores();
});

$("#nome").on("input", function() {
  if (NOME.length <= 45) {
    $("#ass_nome").html(NOME);
  }

  if (NOME.length > 25) {
    $("#ass_nome").css("font-size", "18px");
  } else {
    $("#ass_nome").css("font-size", "24px");
  }
});

$("#cargo_1").on("input", function() {
  if (CARGO_1.length <= 30) {
    $("#ass_cargo_1").html(CARGO_1);
  }
});

$("#cargo_2").on("input", function() {
  if (CARGO_2.length <= 30) {
    $("#ass_cargo_2").html(" | " + CARGO_2);
  }
});

$("#cargo_3").on("input", function() {
  if (CARGO_3.length <= 30) {
    $("#ass_cargo_3").html(" | " + CARGO_3);
  }
});

var input = document.getElementById("assinatura");

$("#opy_but").click(function(event) {
  event.preventDefault();
  selectElementContents(input);
  document.execCommand("copy");
});

function selectElementContents(el) {
  var body = document.body,
    range,
    sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
  }
}

$("#tel1, #tel2, #ramal").on("input", function() {
  var TEL = "";
  if (TEL1.length >= 0 && TEL2.length == 0) {
    TEL =
      '<a href="tel:' +
      TEL1 +
      '" style="color: #FFF;text-decoration: none;padding-left: 10px;" class="phonemask">' +
      TEL1 +
      "</a><span>";
  }

  if (TEL1.length > 0 && TEL2.length > 0) {
    TEL =
      '<a href="tel:' +
      TEL1 +
      '" style="color: #FFF;text-decoration: none;padding-left: 10px;" class="phonemask">' +
      TEL1 +
      '</a><span>  | <a href="' +
      TEL2 +
      '" style="color: #FFF;text-decoration: none;" class="phonemask">' +
      TEL2 +
      "</a>";
  }

  // if (RAMAL.length > 0) {
  //   TEL =
  //     TEL +
  //     '<br /> <a href="' +
  //     RAMAL +
  //     '" style="color: #FFF;text-decoration: none;;padding-left: 10px;">RAMAL: ' +
  //     RAMAL +
  //     "</a>";
  // }
  phonemask();
  $("#ass_telefones").html(TEL);
});

$("#email").on("input", function() {
  $("#ass_email").html(EMAIL);
});

$("#endereco").on("input", function() {
  $("#ass_endereco").html(ENDERECO);
});

$("#email").on("input", function() {
  $("#ass_email").html(EMAIL);
});

$("#redes").on("input", function() {
  $("#ass_redes").html(REDES);
});

$("#fb_1, #fb_2, #fb_3, #inst_1, #inst_2, #inst_3").on("input", function() {
  var Redes = "";

  if (FB_1.length > 0 && IN_1.length > 0) {
    if (FB_1 == IN_1) {
      Redes += redeIguais(FB_1);
    } else {
      Redes += redeDiferente(FB_1, IN_1);
    }
  } else if (FB_1.length > 0) {
    Redes += redeFB(FB_1);
  } else if (IN_1.length) {
    Redes += redeIN(IN_1);
  } else {
  }

  if (FB_2.length > 0 && IN_2.length > 0) {
    if (FB_2 == IN_2) {
      Redes += redeIguais(FB_2);
    } else {
      Redes += redeDiferente(FB_2, IN_2);
    }
  } else if (FB_2.length > 0) {
    Redes += redeFB(FB_2);
  } else if (IN_2.length) {
    Redes += redeIN(IN_2);
  }

  if (FB_3.length > 0 && IN_3.length > 0) {
    if (FB_3 == IN_3) {
      Redes += redeIguais(FB_3);
    } else {
      Redes += redeDiferente(FB_3, IN_3);
    }
  } else if (FB_3.length > 0) {
    Redes += redeFB(FB_3);
  } else if (IN_3.length) {
    Redes += redeIN(IN_3);
  }

  $(".redes").html(Redes);
});

function redeIguais(nome) {
  var redes = '<div class="sub-redes-uno">';
  redes += '<img src="facebook-logo.png">';
  redes += '<img src="instagram.png">';
  redes += "<span>" + nome + "</span>";
  redes += "</div>";
  return redes;
}

function redeDiferente(nome1, nome2) {
  var redes = '<div class="sub-redes">';
  redes += '<div class="fb">';
  redes += '<img src="facebook-logo.png">';
  redes += "<span>" + nome1 + "</span>";
  redes += "</div>";
  redes += '<div class="inst">';
  redes += '<img src="instagram.png">';
  redes += "<span>" + nome2 + "</span>";
  redes += "</div>";
  redes += "</div>";
  return redes;
}

function redeFB(nome) {
  var redes = '<div class="sub-redes">';
  redes += '<div class="fb">';
  redes += '<img src="facebook-logo.png">';
  redes += "<span>" + nome + "</span>";
  redes += "</div>";
  redes += "</div>";
  return redes;
}

function redeIN(nome) {
  var redes = '<div class="sub-redes">';
  redes += '<div class="inst">';
  redes += '<img src="instagram.png">';
  redes += "<span>" + nome + "</span>";
  redes += "</div>";
  redes += "</div>";
  return redes;
}
