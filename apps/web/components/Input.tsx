import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

const InputWrap = styled.div`
  width: 100%;
`;

const Label = styled.label<{ error?: boolean }>`
  display: block;
  width: 100%;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(215, 219, 230);
  ${({ error }) => error && "border-color: rgb(244, 84, 82);"}
  border-radius: 4px;
  overflow: hidden;
  &:focus-within {
    border-color: rgb(26, 124, 255);
  }
`;

const PureInput = styled.input`
  box-sizing: border-box;
  color: rgb(33, 35, 41);
  width: 100%;
  padding: 12px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  outline: none;
  border: none;
`;

const Message = styled.div<{ error?: boolean }>`
  margin-top: 4px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.2px;
  ${({ error }) => error && `color: rgb(244, 84, 82)`}
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  error?: boolean;
  errorText?: string;
}

const Input = ({
  error,
  errorText,
  style,
  placeholder,
  value,
  onChange,
  ...rest
}: Props) => {
  return (
    <InputWrap {...rest}>
      <Label error={error}>
        <PureInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Label>
      {error && <Message error={error}>{errorText}</Message>}
    </InputWrap>
  );
};

export default Input;
