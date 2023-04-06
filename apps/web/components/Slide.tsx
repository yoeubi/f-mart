import styled from "@emotion/styled";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import slideImg from "../public/assets/slide.webp";

const PureSlide = styled.div`
  height: 300px;
  background: gray;
`;

const Slide: FC<PropsWithChildren> = () => {
  return (
    <PureSlide>
      <Image src={slideImg} alt="슬라이드" />
    </PureSlide>
  );
};

export default Slide;
