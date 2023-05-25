import styled from "@emotion/styled";
import { FormEvent } from "react";
import { fetchSignIn } from "../apis/auth";
import Button from "../components/Button";
import Center from "../components/Center";
import Form from "../components/Form";
import Input from "../components/Input";
import SocialButton from "../components/SocialButton";
import Title from "../components/Title";
import { css } from "@emotion/react";
import { useFormState } from "../hooks/form";
import { useRouter } from "next/router";
import Link from "next/link";

const FullSizeButton = styled(Button)`
  width: 100%;
  margin-top: 50px;
`;

const NavBar = styled.div`
  display: flex;
  height: 40px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
`;

const Nav = styled(Link)`
  color: rgb(142, 146, 159);
  font-weight: 500;
`;

const SignIn = () => {
  const router = useRouter();
  const [email, onChangEmail, emailError] = useFormState("", (value) => !value);
  const [password, onChangePassword, passwordError] = useFormState(
    "",
    (value) => !value
  );
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { accessToken, refreshToken } = await fetchSignIn({
      email,
      password,
    });
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    router.replace("/");
  };
  return (
    <Center>
      <Form onSubmit={onSubmit}>
        <Title>로그인</Title>
        <Input
          name="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => onChangEmail(e.target.value)}
          error={emailError}
          errorText="이메일를 입력해주세요."
        />
        <Input
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
        <NavBar>
          <Nav href="/signup">회원가입</Nav>
        </NavBar>
        <FullSizeButton>로그인</FullSizeButton>
        <SocialButton />
      </Form>
    </Center>
  );
};

export default SignIn;
