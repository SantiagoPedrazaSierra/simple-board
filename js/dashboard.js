import { findAllStudent } from "./students.js";
import { findAllCourse } from "./course.js";
import { findAllPayments } from "./payments.js";
import { findAllUsers } from "./user.js";

export const initDashboard = () => {
    // Seleccionar elementos del DOM
    const students = document.querySelector("#students");
    const course = document.querySelector("#course");
    const payment = document.querySelector("#payment");
    const user = document.querySelector("#users");

    // Actualizar los valores en el HTML
    students.textContent = findAllStudent();
    course.textContent = findAllCourse();
    user.textContent = findAllUsers();

    const money = JSON.parse(findAllPayments());
    payment.dataset.format = money.format;
    payment.textContent = money.total;
};