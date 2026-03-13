/// <reference types="vite/client" />
import { atom, selector } from "recoil";
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ActiveAtom = atom({
    key: "ActiveAtom",
    default: "welcome"
});

export const deletedocAtom = atom({
    key: "deletedocAtom",
    default: ""
})

export const userAtom = atom({
    key: "userAtom",
    default: selector({
        key: "userAtomselector",
        get: async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/users/userdetails`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                return response.data;
            } catch (error) {
                console.error("Failed to fetch user details:", error);
                return { name: "Guest", email: "" }; // Return default/empty user on error
            }
        }
    })
})