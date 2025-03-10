export const showMessage = (message, type) => {
    const messageDialog = document.getElementById("messageDialog");
    const messageText = document.getElementById("messageText");

    // Aplicar diferentes estilos según el tipo de mensaje
    messageDialog.classList.remove("success", "error", "warning");
    if (type === "success") {
        messageDialog.classList.add("success");
    } else if (type === "error") {
        messageDialog.classList.add("error");
    } else if (type === "warning") {
        messageDialog.classList.add("warning");
    }

    messageText.textContent = message;
    messageDialog.showModal();

    // Cerrar mensaje al dar clic en el botón
    document.getElementById("closeDialog").addEventListener("click", () => {
        messageDialog.close();
    });
};

