import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getNotes = () => api.get("/");
export const createNote = (data: any) => api.post("/", data);
export const updateNote = (id: string, data: any) => api.put(`/${id}`, data);
export const deleteNote = (id: string) => api.delete(`/${id}`);
