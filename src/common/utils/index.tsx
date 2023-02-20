import { ILocalStorage } from "types";

export const loginData: ILocalStorage = JSON.parse(localStorage.getItem("user") || "{}");