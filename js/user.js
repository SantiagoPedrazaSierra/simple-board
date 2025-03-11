// js/usersLogic.js
export const findAllUsers = () => {
    const DB = localStorage.getItem("users") || "10";
    return DB;
};