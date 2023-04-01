import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ComponentPropsWithoutRef, FC } from "react";

const PureButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 55px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.4px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  background-color: rgb(26, 124, 255);
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

type ButtonProps = ComponentPropsWithoutRef<"button">;

interface Props extends ButtonProps {}

const Button: FC<Props> = (props) => {
  return <PureButton {...props} />;
};

export default Button;
