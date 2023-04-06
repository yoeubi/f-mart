import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  padding: 0 16px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const Input = styled.input`
  height: 46px;
  border: none;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <Form method="POST" action={`/search?keyword=${keyword}`}>
        <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <Button>
          <Image src="/assets/search.svg" alt="서치" width={24} height={24} />
        </Button>
      </Form>
      <div></div>
    </div>
  );
};

export default Search;
