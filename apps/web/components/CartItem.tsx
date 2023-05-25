import styled from "@emotion/styled";
import { FC } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Quantity from "./Quantity";
import { GetCart, patchCart } from "../apis/cart";
import { useMutation, useQueryClient } from "react-query";
import { useMutateCart } from "../hooks/useMudateCart";

const PureCart = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const PureCartTitle = styled.h2`
  margin: 0;
  padding: 12px;
  background-color: rgb(100, 102, 104);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  font-weight: 700;
`;

const WhiteColorCheckbox = styled(Checkbox)`
  color: rgb(255, 255, 255);
`;

const PureMerchandise = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 16px;
`;

const PureImg = styled.img`
  width: 88px;
  height: 88px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const PureText = styled.div`
  background: rgb(243, 245, 247);
  border-radius: 4px;
  text-align: center;
  padding: 12px;
`;

const PureItem = styled.div`
  display: flex;
`;

const PureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface CartItemProps extends GetCart {
  checkedIds: Set<number>;
  onCheck: (id: number) => void;
  onCheckAll: (ids: number[]) => void;
  onDelete: (id: number) => void;
}

const CartItem: FC<CartItemProps> = ({
  store,
  merchandises,
  checkedIds,
  onCheck,
  onCheckAll,
  onDelete,
}) => {
  const ids = merchandises.map(({ id }) => id);
  const queryClient = useQueryClient();
  const { onChangeQuantity } = useMutateCart();
  const isAllChecked = merchandises.every((item) => checkedIds.has(item.id));
  return (
    <PureCart>
      <PureCartTitle>
        <WhiteColorCheckbox
          checked={isAllChecked}
          onChange={() => onCheckAll(ids)}
        >
          {store.name}
        </WhiteColorCheckbox>
      </PureCartTitle>
      <PureList>
        {merchandises.map((item) => (
          <li key={item.id}>
            <PureItem>
              <PureMerchandise>
                <Checkbox
                  checked={checkedIds.has(item.id)}
                  onChange={() => onCheck(item.id)}
                />
                <PureImg src={item.thumbnail} alt={item.name} />
                <div>{item.name}</div>
                <Quantity
                  quantity={item.quantity}
                  onIncrease={() =>
                    onChangeQuantity(item.id, item.quantity + 1)
                  }
                  onDecrease={() =>
                    onChangeQuantity(item.id, item.quantity - 1)
                  }
                />
                <div>{item.price * item.quantity}원</div>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => onDelete(item.id)}
                >
                  X
                </Button>
              </PureMerchandise>
            </PureItem>
            <PureText>상품 금액 = {item.price * item.quantity}원</PureText>
          </li>
        ))}
      </PureList>
    </PureCart>
  );
};

export default CartItem;
