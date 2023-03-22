import Button from "../components/Button";
import Center from "../components/Center";
import Form from "../components/Form";
import Input from "../components/Input";
import Title from "../components/Title";

const SignIn = () => {
  return (
    <Center>
      <Form>
        <Title>로그인</Title>
        <Input
          placeholder="아이디"
          message={{ error: "아이디를 입력해주세요." }}
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
