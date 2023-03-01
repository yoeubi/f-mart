import { fireEvent, render, screen } from "@testing-library/react";
import { useEffect } from "react";
import { RecoilRoot, RecoilState, useRecoilValue } from "recoil";
import { nameState } from "../atoms";
import Input from "../components/Input";

const RecoilObserver = ({
  node,
  onChange,
}: {
  node: RecoilState<string>;
  onChange: (value: string) => void;
}) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

describe("The form state should", () => {
  test("change when the user enters a name.", () => {
    const onChange = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={nameState} onChange={onChange} />
        <Input />
      </RecoilRoot>
    );

    const component = screen.getByTestId("name_input");

    fireEvent.change(component, { target: { value: "Recoil" } });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(""); // Initial state on render.
    expect(onChange).toHaveBeenCalledWith("Recoil"); // New value on change.
  });
});
