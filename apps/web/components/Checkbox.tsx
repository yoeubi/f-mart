import styled from "@emotion/styled";
import { ComponentPropsWithRef, FC, PropsWithChildren } from "react";

const PureLabel = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 24px;
  color: rgb(24, 26, 28);
  gap: 8px;
`;

const PureInput = styled.input`
  margin: 0;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  &:checked {
    border-color: rgb(26, 124, 255);
    background: rgb(26, 124, 255);
  }
`;

type InputProps = ComponentPropsWithRef<"input">;

const Checkbox: FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <PureLabel className={className}>
      <PureInput type="checkbox" {...rest} />
      {children}
    </PureLabel>
  );
};

export default Checkbox;
