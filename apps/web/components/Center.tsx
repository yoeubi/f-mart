import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const PureCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const Center = (props: PropsWithChildren) => {
  return <PureCenter {...props} />;
};

export default Center;
