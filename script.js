var botao = document.querySelector(".btn");
var parabens = document.querySelector(".parabens");
var moldura1 = document.querySelector(".moldura-1");
var mensagem = document.querySelector(".mensagem");
var mensagemBy = document.querySelector(".mensagem-by");
var flor = document.querySelector(".flor");

// botao.addEventListener("click", function () {
//   this.style.display = "none";
//   $(parabens).slideToggle("slow", function () {
//     $(moldura1).fadeToggle("slow", function () {
//       $(mensagem).fadeToggle("slow", function () {
//         $(mensagemBy).fadeToggle("slow", function () {});
//         $(flor)
//           .css("display", "block")
//           .hide()
//           .fadeToggle("slow", function () {});
//       });
//     });
//   });
// });

botao.addEventListener("click", function () {
  //this.style.display = "none";
  $(botao).fadeToggle("fast", function () {
    $(parabens).slideToggle("slow", function () {
      $(moldura1).fadeToggle("slow", function () {
        $(mensagem).fadeToggle("slow", function () {
          $(mensagemBy).fadeToggle("slow", function () {});
          $(flor)
            .css("display", "block")
            .hide()
            .fadeToggle("slow", function () {});
        });
      });
    });
  });
});
