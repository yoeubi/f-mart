import styled from "@emotion/styled";
import { FormEvent, FormHTMLAttributes } from "react";

const PureForm = styled.form`
  padding: 48px 40px;
  width: 448px;
  border: 1px solid rgb(236, 238, 242);
  border-radius: 4px;
  background: white;
`;

type FormProps = FormHTMLAttributes<HTMLFormElement>;

interface Props extends FormProps {}

const Form = ({ onSubmit, ...rest }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };
  return <PureForm {...rest} onSubmit={handleSubmit} />;
};

export default Form;
