/*let amigos = [];

document.getElementById("agregarAmigo").addEventListener("click", function () {
    const input = document.getElementById("nombreAmigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    console.log("Lista de amigos:", amigos);
    
    input.value = ""; // Limpiar el campo de entrada
}); */

let amigos = []
function actualizarLista() {
  // Obtener el elemento de la lista
  const listaAmigos = document.querySelector("#listaAmigos");

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo de amigos
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento de lista para cada amigo
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigos[i];

    // Agregar el nuevo elemento a la lista
    listaAmigos.appendChild(nuevoElemento);
  }
}

// Función para agregar un amigo (modificada para llamar a actualizarLista)
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const inputAmigo = document.querySelector("#amigo");
  const nombre = inputAmigo.value.trim();

  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Actualizar la lista en el HTML
  actualizarLista();

  // Mostrar el contenido actualizado del array en la consola
  console.log("Lista de amigos:", amigos);

  // Limpiar el campo de entrada
  inputAmigo.value = "";
}
// Función para sortear un amigo secreto y mostrar solo el resultado
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
      alert("No hay amigos disponibles para sortear. Por favor, añade algunos amigos primero.");
      return;
    }
  
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // Actualizar el contenido del elemento de resultado
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `<li>Amigo secreto sorteado es: ${amigoSorteado}</li>`;
  
    // Ocultar la lista de amigos en la pantalla
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.style.display = "none";
  }
       
