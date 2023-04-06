import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const PureHeader = styled.header`
  background-color: rgb(255, 255, 255);
`;

const Header: FC<PropsWithChildren> = (props) => {
  return <PureHeader {...props} />;
};

export default Header;
