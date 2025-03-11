// js/studentsLogic.js
export const findAllStudent = () => {
    const DB = localStorage.getItem("students") || "0";
    return DB;
};