import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const PureContainer = styled.div`
  width: 1080px;
  margin: auto;
`;

const Container: FC<PropsWithChildren> = (props) => {
  return <PureContainer {...props} />;
};

export default Container;
