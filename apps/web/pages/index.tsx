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
import { getSlides } from "../apis/slide";
import { Category, getCategories } from "../apis/category";

interface Props {
  list: Merchandise[];
  slides: string[];
  categories: Category[];
}

export default function Web({ list, slides, categories }: Props) {
  return (
    <>
      <Slide slides={slides} />
      <MerchadiseMain>
        <Categories categories={categories} />
        {list.map((item) => (
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
  const [list, slides, categories] = await Promise.all([
    getMerchandises(),
    getSlides(),
    getCategories(),
  ]);
  return {
    props: {
      list,
      slides,
      categories,
    },
  };
};
