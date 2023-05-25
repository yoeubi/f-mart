import styled from "@emotion/styled";
import { ReactElement, useMemo, useState } from "react";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Checkbox from "../components/Checkbox";
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import { Cart, GetCart, deleteCart, getCart } from "../apis/cart";
import { NextPageWithLayout } from "./_app";
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { postOrder } from "../apis/order";

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

interface Props {
  cart: GetCart[];
}

const Cart: NextPageWithLayout<Props> = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery("cart", getCart);
  const [checkedIds, setCheckIds] = useState(new Set<number>());

  const items = useMemo(() => {
    if (!data) return [];
    const items = [];
    for (const item of data) {
      const checkedCart = item.merchandises.filter((merchan) =>
        checkedIds.has(merchan.id)
      );
      items.push(...checkedCart);
    }
    return items;
  }, [data]);

  const count = checkedIds.size;
  const total = items.reduce((pre, cur) => {
    return pre + cur.price * cur.quantity;
  }, 0);

  const mutationCart = useMutation({
    mutationFn: deleteCart,
    onSuccess() {
      queryClient.invalidateQueries("cart");
    },
  });
  const mutationOrder = useMutation({
    mutationFn: postOrder,
    onSuccess() {
      queryClient.invalidateQueries("order");
    },
  });

  const onDelete = (id: number) => {
    mutationCart.mutate(id);
  };
  const onDeleteAll = () => {
    mutationCart.mutate([...checkedIds]);
  };
  const onSubmit = () => {
    mutationOrder.mutate(items);
  };

  const onCheck = (id: number) => {
    setCheckIds((pre) => {
      if (pre.has(id)) {
        pre.delete(id);
      } else {
        pre.add(id);
      }
      return new Set(pre);
    });
  };
  const onCheckAll = (ids: number[]) => {
    setCheckIds((pre) => {
      const alreadyChecked = ids.every((id) => pre.has(id));
      if (alreadyChecked) {
        ids.forEach((id) => pre.delete(id));
      } else {
        ids.forEach((id) => pre.add(id));
      }

      return new Set(pre.keys());
    });
  };

  if (!data) return null;

  return (
    <div>
      <PureTitle>장바구니</PureTitle>
      <PureFlex>
        <PureMain>
          <PureControl>
            <Checkbox>선택 해제</Checkbox>
            <Button variant="secondary" size="md" onClick={onDeleteAll}>
              선택 삭제
            </Button>
          </PureControl>
          <PureList>
            {data.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                store={item.store}
                merchandises={item.merchandises}
                checkedIds={checkedIds}
                onCheck={onCheck}
                onCheckAll={onCheckAll}
                onDelete={onDelete}
              />
            ))}
          </PureList>
        </PureMain>
        <PureOrder>
          <div>예상 주문금액 {total}원</div>
          <FullSizeButton onClick={onSubmit}>
            총 {count}건 주문하기
          </FullSizeButton>
        </PureOrder>
      </PureFlex>
    </div>
  );
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { req } = ctx;
  // const { access_token: accessToken } = req.cookies;

  // if (!accessToken) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("cart", getCart);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Cart;
