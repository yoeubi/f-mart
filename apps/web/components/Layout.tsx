import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const PureLayout = styled.div`
  width: 1080px;
  margin: auto;
`;

const Layout: FC<PropsWithChildren> = (props) => {
  return <PureLayout {...props} />;
};

export default Layout;
