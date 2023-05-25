import { ReactElement } from "react";
import Layout from "../components/Layout";

const Order = () => {
  return <div>{/* <PureTitle>장바구니</PureTitle> */}</div>;
};

Order.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Order;
