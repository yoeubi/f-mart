import axios from "axios";
import { FormEvent } from "react";

export const HOST = "http://localhost:3003";

export const Axios = axios.create({
  baseURL: HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

class APIError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export async function post<T>(url: string, data: T) {
  const response = await fetch(`${HOST}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const message = await response.text();
    throw new APIError(message);
  }
  return response.json();
}

export function getFormData(e: FormEvent<HTMLFormElement>) {
  const formData = new FormData(e.currentTarget);
  const data: { [key: string]: string } = {};
  const entries = formData.entries();
  for (const [key, value] of entries) {
    if (typeof value !== "string") continue;
    data[key] = value;
  }
  return data;
}

export async function get<T>(url: string) {
  const response = await fetch(`${HOST}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const message = await response.text();
    throw new APIError(message);
  }
  return response.json();
}
