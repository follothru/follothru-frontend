import { useState } from "react";

export function useFormInput(initValue = '') {
  const [value, setValue] = useState(initValue);
  const onChange = e => setValue(e.target.value);
  return { value, onChange };
}

export function useDatePickerInput(initValue = '') {
  const [value, setValue] = useState(initValue);
  return { selected: value, onChange: setValue };
}
