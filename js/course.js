// js/courses.js
export const findAllCourse = () => {
    const DB = localStorage.getItem("course") || "0";
    return DB;
};