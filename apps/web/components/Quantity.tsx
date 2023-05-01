import styled from "@emotion/styled";
import { FC } from "react";

const PureQuantityButton = styled.div`
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

export interface QauntityProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Quantity: FC<QauntityProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <PureQuantityButton>
      <PureButton onClick={onDecrease}>-</PureButton>
      <PureInput value={quantity} />
      <PureButton onClick={onIncrease}>+</PureButton>
    </PureQuantityButton>
  );
};

export default Quantity;
