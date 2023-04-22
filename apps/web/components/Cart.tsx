import styled from "@emotion/styled";
import { FC } from "react";

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

const PureCartButton = styled.div`
  width: 112px;
  height: 40px;
  min-width: 112px;
  min-height: 40px;
  display: flex;
  align-items: center;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
`;

const PureButton = styled.button`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

const PureInput = styled.input`
  width: 100%;
  flex-grow: 1;
  text-align: center;
`;

interface Props {
  name: string;
  quantity: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Cart: FC<Props> = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <PureCart>
      <PureTitle>{name}</PureTitle>
      <PurePanel>
        <PureCartButton>
          <PureButton onClick={onDecrease}>-</PureButton>
          <PureInput value={quantity} />
          <PureButton onClick={onIncrease}>+</PureButton>
        </PureCartButton>
        <div>{quantity * price}원</div>
      </PurePanel>
    </PureCart>
  );
};

export default Cart;
