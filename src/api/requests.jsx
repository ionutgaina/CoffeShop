import axios from "axios";

export const API = "http://localhost:3000";

const instance = axios.create({
  baseURL: API,
});

export function contact(data) {
  return instance.post("/contact", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getProducts() {
  return instance.get("/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
