import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

const InputWrap = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(215, 219, 230);
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

const Message = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.2px;
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  error?: boolean;
  message?: {
    error?: string;
    helper?: string;
  };
}

const Input = ({ error, message, style, ...rest }: Props) => {
  return (
    <InputWrap style={style}>
      <Label style={{ borderColor: error ? " rgb(244, 84, 82)" : "" }}>
        <PureInput {...rest} />
      </Label>
      {error && (
        <Message style={{ color: message?.error ? " rgb(244, 84, 82)" : "" }}>
          {message?.error ? message.error : message?.helper}
        </Message>
      )}
    </InputWrap>
  );
};

export default Input;
