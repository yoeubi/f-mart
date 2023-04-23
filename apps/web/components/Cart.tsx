import styled from "@emotion/styled";
import { FC } from "react";
import Quantity, { QauntityProps } from "./Quantity";

const PureCart = styled.div`
  padding: 16px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  font-weight: 400;
  color: rgb(24, 26, 28);
  background: rgb(243, 245, 247);
  margin-top: 20px;
`;

const PureTitle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 40px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  font-weight: 400;
  -webkit-box-align: center;
`;

const PurePanel = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props extends QauntityProps {
  name: string;
  price: number;
}

const Cart: FC<Props> = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <PureCart>
      <PureTitle>{name}</PureTitle>
      <PurePanel>
        <Quantity
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <div>{quantity * price}원</div>
      </PurePanel>
    </PureCart>
  );
};

export default Cart;
