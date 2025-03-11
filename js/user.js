// js/usersLogic.js
export const findAllUsers = () => {
    const DB = localStorage.getItem("users") || "15";
    return DB;
};