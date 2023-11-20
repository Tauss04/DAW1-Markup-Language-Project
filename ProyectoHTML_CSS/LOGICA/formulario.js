function añadirArticulo(event) {
  event.preventDefault(); // Evitar la recarga de la página por defecto

  let nombre = document.getElementById("nombre").value;
  let descripcion = document.getElementById("descripcion").value;
  let destacado = document.getElementById("destacado").checked;
  let seleccion = document.getElementById("subcategoria");
  let selectedOption = seleccion.options[seleccion.selectedIndex].value;

  // Verificar si está marcado como destacado o no
  let prodDestacado = destacado ? "Destacado" : "No destacado";

  let texto = nombre + ": " + descripcion + ", Estado del artículo: " + prodDestacado + ", Categoría: " + selectedOption;

  let nuevoProd = document.createElement('p');
  nuevoProd.className = "nuevosProd";
  nuevoProd.textContent = texto;

  let main = document.querySelector('main');
  main.appendChild(nuevoProd);
}

let boton = document.getElementById("btnEnviar");
boton.addEventListener("click", añadirArticulo);

function tipo(){
  let radio=document.getElementByName("tipo");
  let select=document.getElementById("subcategoria");
  if (radio{1} or radio{2}) {
      select.setAttribute(disabled,disabled);
  }
}