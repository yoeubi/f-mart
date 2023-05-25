import styled from "@emotion/styled";
import { ComponentPropsWithRef, FC, PropsWithChildren } from "react";

const PureLabel = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 24px;
  color: rgb(24, 26, 28);
  gap: 8px;
`;

const PureInput = styled.input`
  margin: 0;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  &:checked {
    border-color: rgb(26, 124, 255);
    background: rgb(26, 124, 255);
  }
`;

type InputProps = ComponentPropsWithRef<"input">;

const Checkbox: FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <PureLabel className={className}>
      <PureInput type="checkbox" {...rest} />
      {children}
    </PureLabel>
  );
};

const ModalContainer = () => {
  const [visible, setVisible] = useState(false);
  const onChange = () => setVisible((pre) => !pre);
  return visibie && <Modal visible={visible} onChange={onChange} />;
};

export default Checkbox;

/* 
 react-query cache를 다시 언제 불러올지 정책들을 정한다
  useQuery, useMutation을 하는데
  쿼리들이 리액트 자체가 서버에서 능동적으로 와다갔다 하는게 아니라서 
  ajax 하는데 많이 쓰여서 아주 많이 생긴다
  이니셜 데이터를 넣어주는 방식으로 구성했을때 사용하는게 번잡해진다
  그래서 하이드레이션을 사용한다.

  권장은 하이드레이션이다
  
 1. re
 1. 
 1. 

*/
