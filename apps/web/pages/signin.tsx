import { FormEvent } from "react";
import { fetchSignIn } from "../apis";
import Button from "../components/Button";
import Center from "../components/Center";
import Form from "../components/Form";
import Input from "../components/Input";
import Title from "../components/Title";

const SignIn = () => {
  const onSubmit = async (
    e: FormEvent<HTMLFormElement> & {
      target: {
        email: HTMLInputElement;
        password: HTMLInputElement;
      };
    }
  ) => {
    const { accessToken, refreshToken } = await fetchSignIn({
      email: e.target.email.value,
      password: e.target.password.value,
    });
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
        <Button style={{ marginTop: "50px" }}>로그인</Button>
      </Form>
    </Center>
  );
};

export default SignIn;
