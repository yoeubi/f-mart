import { Dispatch, SetStateAction } from "react";

class ToastManager {
  dispatch?: Dispatch<SetStateAction<string>>;

  setDispatch(dispatch: Dispatch<SetStateAction<string>>) {
    this.dispatch = dispatch;
  }
  open(value: string) {
    this.dispatch && this.dispatch(value);
  }
}

export const Toast = new ToastManager();
