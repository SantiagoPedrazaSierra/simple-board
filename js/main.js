import { findDataByForm } from "./formHandler.js";
import { loadUsers } from "./auth.js";

// Elementos del HTML
const form = document.querySelector(".container_form");
const signInButton = document.querySelector(".button");

// Cargar usuarios del JSON
loadUsers();

// Capturar el evento submit del formulario
form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita recargar la página
    await findDataByForm(); // Ejecuta la validación del usuario
});
