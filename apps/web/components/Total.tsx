import styled from "@emotion/styled";
import { FC } from "react";

const PureTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  font-weight: 700;
`;

interface Props {
  totalPrice: number;
}

const Total: FC<Props> = ({ totalPrice }) => {
  return (
    <PureTotal>
      <div>총 상품금액</div>
      <div>{totalPrice}원</div>
    </PureTotal>
  );
};

export default Total;
