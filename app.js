/* Variable arrawy - Lista donde guardaremos
    los nombres de los amigos*/
let listaAmigos = []

//Función para añadir un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); //Capturar el valor del campo de entrada
    const nombre = input.value.trim(); //Guardamos el nombre que escribió el usuario

    //Validación de entrada
    if (nombre === "") {
        alert("Por favor inserte un nombre"); // Sí etá vacío, mostramos un aviso
        return; //Salimos de la Función
    }
    //Actualizar el array de amigos
    listaAmigos.push(nombre); //Agregamos el nombre a la lista

    input.value = ""; // Limpiamos el input después de agregar

    mostrarAmigos(); // Llamamos a la función para mostrar la lista actualizada    

}

//Función para mostrar la lista de amigos
// 💡 Elegí usar createElement y appendChild en lugar de innerHTML +=
// porque esta técnica es más segura, más limpia y evita problemas
// con nombres que puedan incluir caracteres especiales o etiquetas inesperadas.
// También es la práctica recomendada cuando se trabaja con elementos dinámicos en el DOM.
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos"); //Capturamos el elemento de la lista
    lista.innerHTML = ""; //Limpiamos la lista antes de mostrar los amigos

    //Recorremos el array de amigos y creamos un elemento <li> para cada uno
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li"); //Creamos un nuevo elemento <li>
        li.textContent = amigo; //Asignamos el nombre del amigo al contenido del <li>
        lista.appendChild(li); //Agregamos el <li> a la lista
    });
}

//función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos
function sortearAmigo() {
    const resultado = document.getElementById("resultado"); //Capturamos el elemento donde mostraremos el resultado
    
    //Validación para asegurarnos de que hay al menos 1 amigo en la lista
    if (listaAmigos.length === 0) {
        alert("¡No hay amigos en la lista para sortear!."); // Si la lista está vacía, mostramos un aviso
        return; // Salimos de la función
    }
    //Generamos un Indice aleatorio 
    const indice = Math.floor(Math.random() * listaAmigos.length); //Generamos un índice aleatorio
    // Obtener el nombre sorteado
    const nombreSorteado = listaAmigos[indice]; //Seleccionamos un amigo al azar
    
    // Mostramos el nombre del amigo sorteado
    resultado.innerHTML = `<li>El amigo secreto es: ${nombreSorteado}</li>`; //Agregamos el nombre sorteado al resultado

}