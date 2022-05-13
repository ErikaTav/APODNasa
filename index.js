

//btnBuscar.addEventListener("click, ()")

$("#btn").click(function(event){
    event.preventDefault()
    var dia= $("#data").val()
    $.ajax({ url: `https://api.nasa.gov/planetary/apod?api_key=SdtMNJiuKYNhthEf94digZNhy38pYClcIbb7D7vR&date=${dia}`,
    success:function(resultado){
        $(`<img class="foto" src="${resultado.url}">`).appendTo(".imagem");
        $(`<h2 class="titulo">${resultado.title}</h2>`).appendTo(".container");
        $(`<p class="texto" > ${resultado.explanation}</p>`).appendTo(".container");
        console.log();(resultado.explanation);
    },
    error: function (erro) {
        console.log(erro);
      },
    });
  });

//SdtMNJiuKYNhthEf94digZNhy38pYClcIbb7D7vR
//&