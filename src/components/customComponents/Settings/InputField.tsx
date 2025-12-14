import React from "react";

interface InputFieldProps {
  label: string;
  value: string;
  onHandleChangeInput: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onHandleChangeInput,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        type="text"
        className="border border-gray-500 p-1.5"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onHandleChangeInput(event.target.value)
        }
      />
    </div>
  );
};

export default InputField;
