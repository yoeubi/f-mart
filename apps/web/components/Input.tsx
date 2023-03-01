import { useRecoilState } from "recoil";
import { nameState } from "../atoms";

const Input = () => {
  const [name, setName] = useRecoilState(nameState);
  return (
    <input
      data-testid="name_input"
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
};

export default Input;
