import { useState } from "react";
import { Toast } from "./Toast";

const ToastContainer = () => {
  const [value, setValue] = useState("");
  Toast.setDispatch(setValue);
  return <div>{value}</div>;
};

export default ToastContainer;
