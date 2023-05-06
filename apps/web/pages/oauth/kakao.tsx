import { getTokenByKakao, signInByKakao } from "../../apis/oAuthKakao";
import { GetServerSideProps } from "next";

const Kakao = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query, res } = ctx;

  const error = query?.error;
  const code = query?.code;

  if (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  if (code) {
    const { access_token: kakaoAccessToken } = await getTokenByKakao(
      code as string
    );
    const { accessToken, refreshToken } = await signInByKakao(kakaoAccessToken);
    console.log(accessToken, refreshToken);

    res.setHeader("Set-Cookie", `access_token=${accessToken};`);
    res.setHeader("Set-Cookie", `refresh_token=${refreshToken};`);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Kakao;
