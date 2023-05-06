import { ReactElement } from "react";
import Categories from "../components/Categories";
import Layout from "../components/Layout";
import MerchadiseMain from "../components/MerchadiseMain";
import MerchandiseItem from "../components/MerchandiseItem";
import MerchandiseList from "../components/MerchandiseList";
import Slide from "../components/Slide";
import { GetServerSideProps } from "next";
import { Merchandise, getMerchandises } from "../apis/merchandise";
import Link from "next/link";

interface Props {
  data: Merchandise[];
}

export default function Web({ data }: Props) {
  return (
    <>
      <Slide />
      <MerchadiseMain>
        <Categories categories={[]} />
        {data.map((item) => (
          <MerchandiseList key={item.id} name={item.name}>
            {item.merchandises.map((merchandise) => (
              <Link key={merchandise.id} href={`/detail/${merchandise.id}`}>
                <MerchandiseItem {...merchandise} />
              </Link>
            ))}
          </MerchandiseList>
        ))}
      </MerchadiseMain>
    </>
  );
}

Web.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await getMerchandises();
  return {
    props: {
      data,
    },
  };
};
