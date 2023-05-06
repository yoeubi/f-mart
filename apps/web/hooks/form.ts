import { useRef, useState } from "react";

export function useFormState<T>(
  defaultValue: T,
  validate: (value: T) => boolean
): [T, (value: T) => void, boolean] {
  const isMounted = useRef(false);
  const [state, setState] = useState<T>(defaultValue);
  const onChange = (value: T) => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
    setState(value);
  };
  const error = isMounted.current && validate(state);
  return [state, onChange, error];
}
