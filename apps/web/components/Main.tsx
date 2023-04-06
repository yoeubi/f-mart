import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const PureMain = styled.div`
  height: 79px;
  display: flex;
  align-items: center;
`;

const Main: FC<PropsWithChildren> = (props) => {
  return <PureMain {...props} />;
};

export const MainUtil = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const MainLogo = styled.div`
  margin-right: 40px;
`;

export default Main;
