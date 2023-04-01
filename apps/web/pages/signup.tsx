import { FormEvent, useState } from "react";
import { getFormData } from "../apis";
import { fetchSignUp, SignUp } from "../apis/auth";
import Button from "../components/Button";
import Center from "../components/Center";
import Form from "../components/Form";
import Input from "../components/Input";
import Title from "../components/Title";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const onSubmit = async (
    e: FormEvent<HTMLFormElement> & {
      target: {
        email: HTMLInputElement;
        password: HTMLInputElement;
      };
    }
  ) => {
    await fetchSignUp(getFormData(e) as unknown as SignUp);
    setIsSignUp(true);
  };

  return (
    <Center>
      <Form onSubmit={onSubmit}>
        {isSignUp ? (
          <>
            <Title>코드 확인</Title>
            <Input
              placeholder="코드"
              message={{ error: "코드를 입력해주세요." }}
            />
            <Button style={{ marginTop: "50px" }}>코드 확인</Button>
          </>
        ) : (
          <>
            <Title>회원가입</Title>
            <Input
              name="email"
              placeholder="아이디"
              message={{ error: "아이디를 입력해주세요." }}
            />
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              message={{ error: "비밀번호를 입력해주세요." }}
              style={{ marginTop: "14px" }}
            />
            <Button style={{ marginTop: "50px" }}>회원가입</Button>
          </>
        )}
      </Form>
    </Center>
  );
};

export default SignUp;
