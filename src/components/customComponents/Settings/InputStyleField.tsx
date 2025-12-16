import React from 'react'
interface InputStyleFieldProps {
  label: string;
  value: string;
  onHandleStyleChange: (value: string) => void;
  type?: string;
}

const InputStyleField: React.FC<InputStyleFieldProps> = ({
  label,
  value,
  onHandleStyleChange,
  type = "px",
}) => {
  const formatValue = (val: string) => {
    if (!val && val !== "") return "";
    const s = val.toString().trim();
    // handle shorthand like "12px 8px" by taking the first numeric token
    const m = s.match(/-?\d+(?:\.\d+)?/);
    if (!m) return "";
    return m[0];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // allow only digits, minus and dot in the input
    const raw = e.target.value;
    const numeric = raw.replace(/[^0-9.-]/g, "");
    // preserve other parts of a shorthand (e.g. "12px 8px")
    const current = value || "";
    const rest = current.toString().trim().replace(new RegExp(`^-?\\d+(?:\\.\\d+)?${type}?`), "").trim();
    const out = numeric === "" ? (rest ? rest : "") : numeric + type + (rest ? ` ${rest}` : "");
    onHandleStyleChange(out);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="">{label}</label>
      <div className="flex">
        <input
          type="text"
          value={formatValue(value)}
          onChange={handleChange}
          className="border border-gray-500 p-1.5 w-full"
        />
        <h2 className="p-1.5 bg-gray-100 rounded-r-lg -ml-2">{type}</h2>
      </div>
    </div>
  );
};

export default InputStyleField;