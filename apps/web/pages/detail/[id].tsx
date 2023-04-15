import styled from "@emotion/styled";
import { ReactElement, ReactNode, useState } from "react";
import { useSetRecoilState } from "recoil";
import { carts } from "../../atoms/cart";
import Button, { ButtonGroup } from "../../components/Button";
import Cart from "../../components/Cart";
import Description from "../../components/Description";
import Layout from "../../components/Layout";
import Total from "../../components/Total";

const PureSection = styled.section`
  display: flex;
  padding: 64px 0;
  gap: 50px;
  background: white;
  min-height: calc(100vh - 125px);
`;

const PureMain = styled.main`
  width: 660px;
`;

const PureSide = styled.aside`
  width: 368px;
`;

const Detail = () => {
  const price = 7500;
  const name = "*88딜특가* 새우가 통째로 왕새우튀김 450g (1인 1개 구매가능)";
  const setCart = useSetRecoilState(carts);
  const [quantity, setQuantity] = useState(1);
  const onIncrease = () => {
    setQuantity((pre) => pre + 1);
  };
  const onDecrease = () => {
    setQuantity((pre) => Math.max(pre - 1, 1));
  };
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
        <div style={{ padding: "0 64px" }}>
          <img
            style={{ width: "100%" }}
            src="https://cdn-mart.baemin.com/sellergoods/main/3d4bfbad-b4a0-414a-86a8-db7cf32039a2.jpg"
          />
        </div>
      </PureMain>
      <PureSide>
        <Description name={name} price={price} />
        <Cart
          name={name}
          quantity={quantity}
          price={price}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <Total totalPrice={quantity * price} />
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

Detail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Detail;
