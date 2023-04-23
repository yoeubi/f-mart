import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const PureTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -1.2px;
  text-align: center;
`;

interface Props {}

const Title = (props: PropsWithChildren<Props>) => {
  return <PureTitle {...props} />;
};

export default Title;
