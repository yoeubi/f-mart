import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

const PureFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex: FC<PropsWithChildren<ComponentPropsWithoutRef<"div">>> = ({
  children,
  className,
}) => {
  return <PureFlex className={className}>{children}</PureFlex>;
};

export default Flex;
