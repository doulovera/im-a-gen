import { ChangeEvent, useState } from "react";

export const useField = (type: string, initialState: number | boolean) => {
  const [value, setValue] = useState<any>(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === "checkbox") return setValue(event.target.checked);
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};
