import styled from "@emotion/styled";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { carts } from "../../atoms/cart";
import Button, { ButtonGroup } from "../../components/Button";

const PureSection = styled.section`
  display: flex;
`;

const PureMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 660px;
  margin-right: 50px;
  max-width: 660px;
`;

const PureSide = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 368px;
  max-width: 368px;
  position: relative;
`;

const Detail = () => {
  const setCart = useSetRecoilState(carts);
  const [quantity, setQuantity] = useState(1);
  const onDecrease = () => {
    setQuantity((pre) => pre - 1);
  };
  const onIncrease = () => {
    setQuantity((pre) => pre + 1);
  };
  const price = 7500;
  const onSubmit = () => {
    setCart((pre) =>
      pre.concat({
        merchandiseId: 1,
        quantity,
      })
    );
  };
  return (
    <PureSection>
      <PureMain>
        <div>
          <img src="https://cdn-mart.baemin.com/sellergoods/main/3d4bfbad-b4a0-414a-86a8-db7cf32039a2.jpg" />
        </div>
      </PureMain>
      <PureSide>
        <div>아이에프웰</div>
        <div>
          *88딜특가* 새우가 통째로 왕새우튀김 450g (1인 1개 구매가능) - 2103307
        </div>
        <div>17500원</div>
        <div>
          <div>
            *88딜특가* 새우가 통째로 왕새우튀김 450g (1인 1개 구매가능) -
            2103307
          </div>
          <div>
            <div>
              <button onClick={onDecrease}>-</button>
              {quantity}
              <button onClick={onIncrease}>+</button>
            </div>
            <div>{quantity * price}원</div>
          </div>
        </div>
        <div>
          <div>총 상품금액</div>
          <div>7000원</div>
        </div>
        <ButtonGroup>
          <Button variant="secondary" onClick={onSubmit}>
            장바구니 담기
          </Button>
          <Button>바로구매</Button>
        </ButtonGroup>
      </PureSide>
    </PureSection>
  );
};

export default Detail;
