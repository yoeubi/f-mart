import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { getTokenByKakao, signInByKakao } from "../../apis/oAuthKakao";
import { cookies } from "next/headers";

const Kakao = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cookieStore = cookies();

  useEffect(() => {
    const code = searchParams.get("code");
    const error = searchParams.get("error");
    (async () => {
      if (code) {
        console.log(code);
        const { access_token: kakaoAccessToken } = await getTokenByKakao(code);
        const { accessToken, refreshToken } = await signInByKakao(
          kakaoAccessToken
        );
        cookieStore.set("access_token", accessToken);
        cookieStore.set("refresh_token", refreshToken);
        router.replace("/");
      }
      if (error) {
        console.log(error);
        router.replace("/");
      }
    })();
  }, [searchParams, router]);
  return null;
};

export default Kakao;
