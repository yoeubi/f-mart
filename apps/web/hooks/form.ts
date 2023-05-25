import { useState } from "react";

export function useFormState<T>(
  defaultValue: T,
  validate: (value: T) => boolean
): [T, (value: T) => void, boolean] {
  const [state, setState] = useState<T>(defaultValue);
  const [error, setError] = useState(false);
  const onChange = (value: T) => {
    setError(validate(state));
    setState(value);
  };
  return [state, onChange, error];
}
