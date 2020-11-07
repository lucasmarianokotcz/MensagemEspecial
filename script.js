var botao = document.querySelector(".btn");
var parabens = document.querySelector(".parabens");
var moldura1 = document.querySelector(".moldura-1");
var mensagem = document.querySelector(".mensagem");
var mensagemBy = document.querySelector(".mensagem-by");
var vinte = document.querySelector(".vinte");
var lavanda = document.querySelector(".lavanda");

botao.addEventListener("click", function () {
  $(botao).fadeToggle("fast", function () {
    $(parabens).slideToggle("slow", function () {
      $(moldura1).fadeToggle("slow", function () {
        $(mensagem).fadeToggle("slow", function () {
          $(mensagemBy).fadeToggle("slow", function () {});
          $(vinte)
            .css("display", "block")
            .hide()
            .fadeToggle("slow", function () {});
          $(lavanda)
            .css("display", "block")
            .hide()
            .fadeToggle("slow", function () {});
        });
      });
    });
  });
});
