import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

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

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {}

const Button = (props: Props) => {
  return <PureButton {...props} />;
};

export default Button;
