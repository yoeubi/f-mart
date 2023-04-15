import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const PureBar = styled.div`
  height: 79px;
  display: flex;
  align-items: center;
`;

const Bar: FC<PropsWithChildren> = (props) => {
  return <PureBar {...props} />;
};

export const Util = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const LogoContainer = styled.div`
  margin-right: 40px;
`;

export default Bar;
