// js/paymentsLogic.js
export const findAllPayments = () => {
    const DB = localStorage.getItem("payment") || JSON.stringify({ format: "COP", total: 20 });
    return DB;
};