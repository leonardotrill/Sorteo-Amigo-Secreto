// Lista de amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturar el input
    let nombre = input.value.trim(); // Obtener el valor sin espacios extra

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido."); // Evita nombres vacíos
        return;
    }

    listaAmigos.push(nombre); // Agregar el nombre a la lista
    input.value = ""; // Limpiar el input después de agregar
    mostrarLista(); // Actualizar la lista en pantalla
}

// Función para mostrar la lista en la página
function mostrarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

// Función para hacer el sorteo y ocultar la lista de nombres
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; // Elegir un nombre aleatorio
    let resultadoElement = document.getElementById("resultado");
    let listaElement = document.getElementById("listaAmigos");
    let botonSortear = document.querySelector(".button-draw"); // Seleccionar el botón

    // Mostrar solo el resultado y ocultar la lista de nombres
    listaElement.innerHTML = ""; // Vaciar la lista de nombres
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>`;

    // Desactivar el botón después del sorteo
    botonSortear.disabled = true;
    botonSortear.style.opacity = "0.5"; // Visualmente desactivado
    botonSortear.style.cursor = "not-allowed";
}

