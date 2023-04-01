import { post } from ".";

export interface SignIn {
  email: string;
  password: string;
}

export function fetchSignIn(
  data: SignIn
): Promise<{ accessToken: string; refreshToken: string }> {
  return post("/signin", data);
}

export interface SignUp {
  email: string;
  password: string;
}

export function fetchSignUp(data: SignUp): Promise<{ code: string }> {
  return post("/signup", data);
}
