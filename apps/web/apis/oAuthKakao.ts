import { Axios, HOST, post } from ".";

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
  const response = await Axios.post(KAKAO_TOKEN_URL, formData, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
  const token = (await response.json()) as KakaoToken;
  return token;
}

export async function signInByKakao(
  kakaoAccessToken: string
): Promise<{ accessToken: string; refreshToken: string }> {
  const response = await Axios.post(HOST + "/oauth/kakao", {
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
/* 
  벌크 데이터 입력
  SEED, sql insert 
  파일 불러오는 형식

  csv import 

  web 크롤링
  스크립트를 작성하여 
  API를 반복하여 호출할수 있는 방법이 있다.

  데이터를 방식 복잡해서 API를 반복호출

  mysql csv import 

  axios 는 자동 타입을 추론해서 헤더를 넣어주지 않는다 

  최대한 간단한 방법을 먼저 사용을 하고 
  안됐을때 어드벤스트한 데이터 스트럭쳐를 사용하는게 좋다
  배열이나 객체를 사용하는데 
  그걸로 해결곤란하면 셋, 맵을 사용하면 좋다

  특수한 상황에 쓰이는 것
  중복 회피하고 싶을땐 체크아이디를 배열로 두고 온체크 쪽에서 셋해서 중복을 제거해서 다시 넣어주는 것으로 하지 않을까 싶다


  
*/
