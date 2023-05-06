import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const PureCategories = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Category {
  thumbnail: string;
  name: string;
  id: number;
}

const Categories: FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <PureCategories>
      {categories.map((category) => (
        <CategoryItem key={category.name} href={`/category/${category.id}`}>
          <CategoryImg>
            <Image
              src={category.thumbnail}
              alt={category.name}
              width={60}
              height={60}
            />
          </CategoryImg>
          <CategoryName>{category.name}</CategoryName>
        </CategoryItem>
      ))}
    </PureCategories>
  );
};

const CategoryItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: blue;
  overflow: hidden;
`;

const CategoryName = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  font-weight: 400;
  color: rgb(24, 26, 28);
  margin-top: 8px;
`;

export default Categories;
