import styled from "@emotion/styled";
import Image from "next/image";

const PureIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
`;

const Text = styled.span`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.2px;
  font-weight: 400;
  color: rgb(24, 26, 28);
`;

const Icon = () => {
  return (
    <PureIcon>
      <Image src="/assets/user.svg" alt="유저" width={24} height={24} />
      <Text>장바구니</Text>
    </PureIcon>
  );
};

export default Icon;
