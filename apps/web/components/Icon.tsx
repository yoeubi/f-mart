import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

const PureIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
`;

const Text = styled.span`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.2px;
  font-weight: 400;
  color: rgb(24, 26, 28);
`;

interface Props {
  src: string;
  name: string;
}

const Icon: FC<Props> = ({ src, name }) => {
  return (
    <PureIcon>
      <Image src={src} alt={name} width={24} height={24} />
      <Text>{name}</Text>
    </PureIcon>
  );
};

export default Icon;
