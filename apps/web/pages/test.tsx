import { Toast } from "../components/Toast";

const Test = () => {
  return (
    <div>
      <button onClick={() => Toast.open("123")}>show Toast</button>
    </div>
  );
};

export default Test;
