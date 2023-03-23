import SignUp from "../pages/signup";

const HOST = "http://localhost:3001";

export interface SignIn {
  email: string;
  password: string;
}

export function fetchSignIn(
  data: SignIn
): Promise<{ accessToken: string; refreshToken: string }> {
  return fetch(HOST + "/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error();
    return res.json();
  });
}

export interface SignUp {
  email: string;
  password: string;
}

export function fetchSignUp(data: SignUp): Promise<{ code: string }> {
  return fetch(HOST + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error();
    return res.json();
  });
}
