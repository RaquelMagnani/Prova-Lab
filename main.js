alert ("Bem vindo");

var nome = prompt ("Digite seu nome");

var confirmar = prompt ("Deseja fazer a prova S ou N?");

if (confirmar == "S"){
  alert("Boa prova");

  var pergunta1 = prompt ("Que dia é hoje? 1 2 3 " );

  if (pergunta1 == "1") {
    var resp1 = document.getElementById('correta') ;
    resp1.innerHTML = pergunta1}


  var visitante = document.getElementById('visitante');

  visitante.innerHTML = nome;

}else{
    alert ("Tchau");
  }
