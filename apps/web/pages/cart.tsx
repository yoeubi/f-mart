import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactElement, useState } from "react";
import Button from "../components/Button";
import CartItem, { CartItemProps } from "../components/CartItem";
import Checkbox from "../components/Checkbox";
import Layout from "../components/Layout";
import Quantity from "../components/Quantity";
import { GetServerSideProps } from "next";

const PureTitle = styled.div`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.4px;
  font-weight: 700;
  padding: 44px 0px;
  text-align: center;
`;

const PureOrder = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 344px;
  max-width: 344px;
  position: sticky;
  margin-top: 52px;
  top: 202px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgb(243, 245, 247);
  border-radius: 6px;
  padding: 16px 28px;
`;

const PureFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const FullSizeButton = styled(Button)`
  width: 100%;
`;

const PureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PureMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 712px;
  max-width: 712px;
`;

const PureControl = styled.div`
  display: flex;
  justify-content: space-between;
  height: 52px;
`;

const Cart = () => {
  const list: CartItemProps[] = [
    {
      storeName: "한국 쥬맥스",
      merchandises: [
        {
          id: 1,
          name: "망고 주스",
          thumbnail:
            "https://cdn-mart.baemin.com/sellergoods/thumbnail/dec0442b-d088-400c-80f3-40e79e4344cc.png?h=200&w=200",
          price: 3000,
        },
      ],
    },
  ];
  return (
    <div>
      <PureTitle>장바구니</PureTitle>
      <PureFlex>
        <PureMain>
          <PureControl>
            <Checkbox>선택 해제</Checkbox>
            <Button variant="secondary" size="md">
              선택 삭제
            </Button>
          </PureControl>
          <PureList>
            {list.map((item) => (
              <CartItem key={item.storeName} {...item} />
            ))}
          </PureList>
        </PureMain>
        <PureOrder>
          <div>예상 주문금액 0원</div>
          <FullSizeButton>총 2건 주문하기</FullSizeButton>
        </PureOrder>
      </PureFlex>
    </div>
  );
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;
  const { access_token: accessToken } = req.cookies;

  if (!accessToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Cart;
