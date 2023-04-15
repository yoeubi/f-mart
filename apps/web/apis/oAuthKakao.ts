import { post } from ".";

const CLIENT_ID = "871c4edc1c6d18ca4d2eedce73eaf16f";
const REDIRECT_URI = "http://localhost:3000/oauth/kakao";
const KAKAO_HOST = "https://kauth.kakao.com";
export const KAKAO_AUTHORIZATION_CODE_URL = `${KAKAO_HOST}/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const KAKAO_TOKEN_URL = `${KAKAO_HOST}/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URI}`;

interface KakaoToken {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

export async function getTokenByKakao(code: string) {
  const response = await fetch(KAKAO_TOKEN_URL + `&code=${code}`, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: `code=${code}`,
  });
  const token = (await response.json()) as KakaoToken;
  return token;
}

export function signInByKakao(accessToken: string) {
  return post("/oauth/kakao", {
    accessToken,
  });
}
