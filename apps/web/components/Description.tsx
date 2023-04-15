import styled from "@emotion/styled";
import { FC } from "react";

const PureTitle = styled.div`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.4px;
  font-weight: 500;
`;

const PurePrice = styled.div`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.4px;
  font-weight: 700;
  color: rgb(24, 26, 28);
  margin-top: 16px;
`;

interface Props {
  name: string;
  price: number;
}

const Description: FC<Props> = ({ name, price }) => {
  return (
    <div>
      <PureTitle>{name}</PureTitle>
      <PurePrice>{price}원</PurePrice>
    </div>
  );
};

export default Description;
