import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

const variantStyleMap = {
  primary: `
    background: rgb(26, 124, 255);
    color: rgb(255, 255, 255);
  `,
  secondary: `
    color: rgb(26, 124, 255);
    background-color: rgb(255, 255, 255);
  `,
};

const PureButton = styled.button<{ variant: Variant }>`
  outline: none;
  border: none;
  border-radius: 4px;
  height: 55px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.4px;
  font-weight: bold;
  border: 1px solid rgb(26, 124, 255);
  flex-shrink: 0;
  ${({ variant }) => variantStyleMap[variant]}
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

type ButtonProps = ComponentPropsWithoutRef<"button">;

type Variant = "primary" | "secondary";

interface Props extends ButtonProps {
  variant?: Variant;
}

const Button: FC<PropsWithChildren<Props>> = ({
  variant = "primary",
  ...rest
}) => {
  return <PureButton variant={variant} {...rest} />;
};

const PureButtonGroup = styled.div`
  display: inline-flex;
  gap: 4px;
  width: 100%;
  margin-top: 20px;
  button {
    flex: 1 1 0%;
  }
`;

export const ButtonGroup: FC<PropsWithChildren> = (props) => {
  return <PureButtonGroup {...props} />;
};

export default Button;
