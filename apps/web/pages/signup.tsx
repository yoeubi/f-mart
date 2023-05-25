import { FormEvent, useState } from "react";
import { fetchSignUp } from "../apis/auth";
import Button from "../components/Button";
import Center from "../components/Center";
import Form from "../components/Form";
import Input from "../components/Input";
import Title from "../components/Title";
import styled from "@emotion/styled";
import { useFormState } from "../hooks/form";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

const FullSizeButton = styled(Button)`
  width: 100%;
  margin-top: 50px;
`;

const SignUp = () => {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [code, onChangeCode, codeError] = useFormState("", (value) => !value);
  const [email, onChangEmail, emailError] = useFormState("", (value) => !value);
  const [password, onChangePassword, passwordError] = useFormState(
    "",
    (value) => !value
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (emailError || passwordError) return;
    if (!isSignUp) {
      await fetchSignUp({ email, password });
      setIsSignUp(true);
    } else {
      router.replace("/");
    }
  };

  return (
    <Center>
      <Form onSubmit={onSubmit}>
        {isSignUp ? (
          <>
            <Title>코드 확인</Title>
            <Input
              placeholder="코드"
              value={code}
              onChange={(e) => onChangeCode(e.target.value)}
              error={codeError}
              errorText={"코드를 입력해주세요."}
            />
            <FullSizeButton>코드 확인</FullSizeButton>
          </>
        ) : (
          <>
            <Title>회원가입</Title>
            <Input
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => onChangEmail(e.target.value)}
              error={emailError}
              errorText="이메일을 입력해주세요."
            />
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => onChangePassword(e.target.value)}
              error={passwordError}
              errorText="비밀번호를 입력해주세요."
              css={css`
                margin-top: 14px;
              `}
            />
            <FullSizeButton>회원가입</FullSizeButton>
          </>
        )}
      </Form>
    </Center>
  );
};

export default SignUp;
