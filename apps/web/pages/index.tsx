import styled from "@emotion/styled";
import { Button } from "ui";

const Component = styled.div`
  background-color: red;
`;

export default function Web() {
  return (
    <div>
      <h1 role="heading">Web</h1>
      <Component>Web</Component>
      <Button />
    </div>
  );
}
