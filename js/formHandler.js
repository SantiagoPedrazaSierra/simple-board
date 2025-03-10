import { validateUser } from "./auth.js";
import { saveSession } from "./storage.js";
import { showMessage } from "./ui.js";

export const findDataByForm = async () => {
    // Obtener valores del formulario
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validar usuario
    const result = validateUser(email, password);

    if (result.status === 200) {
        saveSession(result.user);
        showMessage(`Bienvenido  ${result.user.USER}`, "success");
    } else {
        showMessage(result.message, "error");
    }
};
