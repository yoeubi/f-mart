import styled from "@emotion/styled";
import { FC, ReactElement, ReactNode, useState } from "react";
import { useSetRecoilState } from "recoil";
import { cartsAtom } from "../../atoms/cart";
import Button, { ButtonGroup } from "../../components/Button";
import Cart from "../../components/Cart";
import Description from "../../components/Description";
import Layout from "../../components/Layout";
import Total from "../../components/Total";
import { GetServerSideProps } from "next";
import { MerchandiseItem, getMerchandiseItem } from "../../apis/merchandise";
import { NextPageWithLayout } from "../_app";
import Image from "next/image";
import { useMutation, useQueryClient } from "react-query";
import { postCart } from "../../apis/cart";

const PureSection = styled.section`
  display: flex;
  padding: 64px 0;
  justify-content: space-between;
  background: white;
  min-height: calc(100vh - 125px);
`;

const PureMain = styled.main`
  width: 660px;
`;

const PureImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PureSide = styled.aside`
  width: 368px;
`;

interface Props {
  item: MerchandiseItem;
}

const Detail: NextPageWithLayout<Props> = ({ item }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postCart,
    onSuccess() {
      queryClient.invalidateQueries("cart");
    },
  });
  const [quantity, setQuantity] = useState(1);
  const onIncrease = () => {
    setQuantity((pre) => pre + 1);
  };
  const onDecrease = () => {
    setQuantity((pre) => Math.max(pre - 1, 1));
  };
  const onSubmit = () => {
    mutation.mutate({
      merchandiseId: item.id,
      quantity,
    });
  };
  return (
    <PureSection>
      <PureMain>
        <PureImageWrapper>
          <Image
            src={item.thumbnail}
            alt={item.name}
            width={464}
            height={464}
          />
        </PureImageWrapper>
      </PureMain>
      <PureSide>
        <Description name={item.name} price={item.price} />
        <Cart
          name={item.name}
          quantity={quantity}
          price={item.price}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <Total totalPrice={quantity * item.price} />
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const item = await getMerchandiseItem(Number(id));
  return {
    props: {
      item,
    },
  };
};

export default Detail;
