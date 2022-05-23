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

export function postProduct(data) {
  return instance.post("/products", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function deleteProduct(id) {
  return instance.delete("/products/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function updateProduct(id, data) {
  return instance.patch("/products/" + id, data);
}
