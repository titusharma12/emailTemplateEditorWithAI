import React from 'react';
interface ToggleOption {
  value: string;
  icon?: any;
}

interface ToggleGroupFieldProps {
  label: string;
  value: string;
  options?: ToggleOption[];
  onHandleStyleChange: (value: string) => void;
}

const ToggleGroupField: React.FC<ToggleGroupFieldProps> = ({
  label,
  value,
  options = [],
  onHandleStyleChange
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>

      <div className="flex gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onHandleStyleChange(option.value)}
            className={`px-4 py-2.5 rounded-md flex w-full justify-center items-center gap-2
              ${
                value === option.value
                  ? 'bg-gray-200 text-black font-semibold'
                  : 'bg-gray-50 text-black'
              }
            `}
          >
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleGroupField;
