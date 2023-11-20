window.addEventListener('load', function() {
  window.open('./paginas/banner.html', 'banner', 'width=500,height=300');
  let boton = document.getElementById("btnLogIn");
  let contador=0;
  
  function logear() {
    contador++;
    let nombre = document.getElementById("nombreLogIn");

    if (contador%2==0) {
        let texto = "";
        nombre.textContent = texto;
        
    }else{
      let inicio = prompt("Introduce tu nombre");
      
      let texto = "Bienvenido, " + inicio;
        nombre.textContent = texto;
    }
    

    cambioLog(); // Llamada a la función cambioLog() después de logear()
  }

  function cambioLog() {

    if (boton.innerHTML === 'Log in') {
      boton.innerHTML = 'Log out';
    }else if(boton.innerHTML==='Log out'){
      boton.innerHTML = 'Log in'
    }
  }

  boton.addEventListener('click', logear);
});