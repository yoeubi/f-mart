import styled from "@emotion/styled";
import Link from "next/link";

const PureCategories = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Categories = () => {
  return (
    <PureCategories>
      <CategoryItem href="/#">
        <CategoryImg />
        <CategoryName>1</CategoryName>
      </CategoryItem>
      <CategoryItem href={"/"}>
        <CategoryImg />
        <CategoryName>1</CategoryName>
      </CategoryItem>
      <CategoryItem href={"/"}>
        <CategoryImg />
        <CategoryName>1</CategoryName>
      </CategoryItem>
      <CategoryItem href={"/"}>
        <CategoryImg />
        <CategoryName>1</CategoryName>
      </CategoryItem>
      <CategoryItem href={"/"}>
        <CategoryImg />
        <CategoryName>1</CategoryName>
      </CategoryItem>
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
