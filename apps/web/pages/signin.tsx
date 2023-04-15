import styled from "@emotion/styled";
import { FC, FormEvent, ReactElement } from "react";
import { getFormData } from "../apis";
import { fetchSignIn, SignIn } from "../apis/auth";
import Button from "../components/Button";
import Center from "../components/Center";
import Container from "../components/Container";
import Form from "../components/Form";
import Input from "../components/Input";
import Title from "../components/Title";
import { NextPageWithLayout } from "./_app";

const FullSizeButton = styled(Button)`
  width: 100%;
  margin-top: 50px;
`;

const SignIn: NextPageWithLayout = () => {
  const onSubmit = async (
    e: FormEvent<HTMLFormElement> & {
      target: {
        email: HTMLInputElement;
        password: HTMLInputElement;
      };
    }
  ) => {
    const { accessToken, refreshToken } = await fetchSignIn(
      getFormData(e) as unknown as SignIn
    );
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
  };
  return (
    <Center>
      <Form onSubmit={onSubmit}>
        <Title>로그인</Title>
        <Input
          name="email"
          placeholder="이메일"
          message={{ error: "이메일를 입력해주세요." }}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          message={{ error: "비밀번호를 입력해주세요." }}
          style={{ marginTop: "14px" }}
        />
        <FullSizeButton>로그인</FullSizeButton>
      </Form>
    </Center>
  );
};

export default SignIn;
