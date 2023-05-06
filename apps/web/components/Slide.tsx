import styled from "@emotion/styled";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";

const PureSlide = styled.div`
  height: 300px;
  background: gray;
  display: flex;
  flex-flow: row nowrap;
  overflow: auto;
`;

interface Props {
  slides: string[];
}

const Slide: FC<PropsWithChildren<Props>> = ({ slides }) => {
  return (
    <PureSlide>
      {slides.map((slide) => (
        <Image src={slide} alt="슬라이드" width={1080} height={300} />
      ))}
    </PureSlide>
  );
};

export default Slide;
