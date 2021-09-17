//Obtener elementos

let links = document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(link){

//agregar un evento click
    link.addEventListener("click",function(ev){
      ev.preventDefault();
      let content = document.querySelector('.content');

//quitar las clases de animacion que ya tiene
      content.classList.remove("animate__fadeInDown");
      content.classList.remove("animate__animated");

// agregar clases para animar su salida fadeOutUp;
      content.classList.add("animate__fadeOutUp");
      content.classList.add("animate__animated");

      setTimeout(function(){
        location.href = "/boletines";
      },600);

//setInterval

      return false;

    });
});
