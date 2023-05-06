import { FormEvent } from "react";

export const HOST = "http://localhost:3003";

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
