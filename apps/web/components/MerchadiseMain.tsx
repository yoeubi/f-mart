import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const PureMerchadiseMain = styled.div`
  padding: 36px 68px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const MerchadiseMain: FC<PropsWithChildren> = (props) => {
  return <PureMerchadiseMain {...props} />;
};

export default MerchadiseMain;
