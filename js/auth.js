let users = [];

// Función para cargar los usuarios desde el JSON
export const loadUsers = async () => {
    try {
        const response = await fetch("../environment.json");
        users = await response.json();
    } catch (error) {
        console.error("Error al cargar usuarios:", error);
    }
};

// Función para validar el usuario
export const validateUser = (email, password) => {
    const user = users.find(u => u.USER === email);

    if (!user) {
        return { status: 404, message: "Usuario no encontrado" };
    }

    if (user.PWD !== password) {
        return { status: 401, message: "Contraseña incorrecta" };
    }

    return { status: 200, user };
};
