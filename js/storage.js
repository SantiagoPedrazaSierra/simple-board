export const saveSession = (user) => {
    localStorage.setItem("loggedUser", JSON.stringify(user));
};

export const getSession = () => {
    return JSON.parse(localStorage.getItem("loggedUser"));
};
