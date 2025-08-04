/* Variable arrawy - Lista donde guardaremos
    los nombres de los amigos*/
let listaAmigos = []

//Función para añadir un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); //Capturar el valor del campo de entrada
    const nombre = input.ariaValueMax.trim(); //Guardamos el nombre que escribió el usuario

    //Validación de entrada
    if (nombre === "") {
        alert("Por favor inserte un nombre"); // Sí etá vacío, mostramos un aviso
        return; //Salimos de la Función
    }
    //Actualizar el array de amigos
    listaAmigos.push(nombre); //Agregamos el nombre a la lista

    input.value = ""; // Limpiamos el input después de agregar


}

