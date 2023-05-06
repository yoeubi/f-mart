import styled from "@emotion/styled";
import Image from "next/image";
import { KAKAO_AUTHORIZATION_CODE_URL } from "../apis/oAuthKakao";
import Flex from "./Flex";

const ImageWithCircle = styled(Image)`
  border-radius: 50%;
`;

const FlexWithMargin = styled(Flex)`
  margin-top: 24px;
`;

const SocialButton = () => {
  return (
    <FlexWithMargin>
      <a href={KAKAO_AUTHORIZATION_CODE_URL}>
        <ImageWithCircle
          src="/assets/kakao_icon.png"
          alt="카카오 로그인"
          width={48}
          height={48}
        />
      </a>
    </FlexWithMargin>
  );
};

export default SocialButton;
