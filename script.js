const img = document.getElementById("imagen");
const btnGato = document.getElementById("gato");
const btnPerro = document.getElementById("perro");

// Evento para el botón Gato
btnGato.addEventListener("click", () => {
    img.src = "https://i.pinimg.com/736x/10/9b/bc/109bbce83df7cd9663697f4d44b15cb4.jpg";
});

// Evento para el botón Perro
btnPerro.addEventListener("click", () => {
    img.src = "https://i.pinimg.com/736x/3b/46/b0/3b46b08e5b108344611e93e59ce671df.jpg";
});