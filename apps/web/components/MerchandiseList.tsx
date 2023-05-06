import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const PureMerchandiseList = styled.div``;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.4px;
  font-weight: 500;
  margin: 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

interface Props {
  name: string;
}

const MerchandiseList: FC<PropsWithChildren<Props>> = ({ children, name }) => {
  return (
    <PureMerchandiseList>
      <Title>{name}</Title>
      <List>{children}</List>
    </PureMerchandiseList>
  );
};

export default MerchandiseList;
