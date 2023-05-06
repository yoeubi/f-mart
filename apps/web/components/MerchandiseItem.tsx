import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { MerchandiseItem } from "../apis/merchandise";

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

const Price = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  font-weight: 700;
  color: rgb(24, 26, 28);
`;

const MerchandiseItem: FC<MerchandiseItem> = ({ name, price, thumbnail }) => {
  return (
    <PureMerchadiseItem>
      <Image src={thumbnail} alt={name} width={144} height={144} />
      <Description>
        <Text>{name}</Text>
        <Price>{price.toLocaleString()}원</Price>
      </Description>
    </PureMerchadiseItem>
  );
};

export default MerchandiseItem;
