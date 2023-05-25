import { Axios, post } from ".";

export interface SignIn {
  email: string;
  password: string;
}

export function fetchSignIn(
  data: SignIn
): Promise<{ accessToken: string; refreshToken: string }> {
  return Axios.post("/signin", data);
}

export interface SignUp {
  email: string;
  password: string;
}

export function fetchSignUp(data: SignUp): Promise<{ code: string }> {
  return Axios.post("/signup", data);
}
