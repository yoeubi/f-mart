import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { getTokenByKakao, signInByKakao } from "../../apis/oAuthKakao";

const Kakao = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");
    const error = searchParams.get("error");
    (async () => {
      if (code) {
        console.log(code);
        const { access_token } = await getTokenByKakao(code);
        await signInByKakao(access_token);
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
