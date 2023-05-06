import { HOST, post } from ".";

const CLIENT_ID = "871c4edc1c6d18ca4d2eedce73eaf16f";
const REDIRECT_URI = "http://localhost:3000/oauth/kakao";
const KAKAO_HOST = "https://kauth.kakao.com";
export const KAKAO_AUTHORIZATION_CODE_URL = `${KAKAO_HOST}/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const KAKAO_TOKEN_URL = `${KAKAO_HOST}/oauth/token`;

interface KakaoToken {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

export async function getTokenByKakao(code: string) {
  const formData = new URLSearchParams();
  formData.append("code", code);
  formData.append("grant_type", "authorization_code");
  formData.append("redirect_uri", REDIRECT_URI);
  formData.append("client_id", CLIENT_ID);
  const response = await fetch(KAKAO_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: formData,
  });
  const token = (await response.json()) as KakaoToken;
  return token;
}

export async function signInByKakao(
  kakaoAccessToken: string
): Promise<{ accessToken: string; refreshToken: string }> {
  const response = await fetch(HOST + "/oauth/kakao", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ accessToken: kakaoAccessToken }),
  });
  const accessToken = response.headers.get("access_token") || "";
  const refreshToken = response.headers.get("refresh_token") || "";
  return { accessToken, refreshToken };
}
