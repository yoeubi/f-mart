import styled from "@emotion/styled";
import Image from "next/image";

const PureMerchadiseItem = styled.li``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const Text = styled.div`
  color: rgb(24, 26, 28);
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  font-weight: 400;
  width: 144px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

const MerchandiseItem = () => {
  return (
    <PureMerchadiseItem>
      <Image src="/assets/shrimp.webp" alt="새우" width={144} height={144} />
      <Description>
        <Text>[다이아몬드] 탈각새우(31/40) 900g / 냉동 생 칵테일새우(IQF)</Text>
        <div className="price">13,880원</div>
      </Description>
    </PureMerchadiseItem>
  );
};

export default MerchandiseItem;
