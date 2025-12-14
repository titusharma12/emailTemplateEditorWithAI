import React from 'react';

interface SliderFieldProps {
  label: string;
  value: string;
  onHandleStyleChange: (value: string) => void;
  type?: string;
}

const SliderField: React.FC<SliderFieldProps> = ({
  label,
  value,
  onHandleStyleChange,
  type = 'px',
}) => {
  // Safely extract number
  const FormattedValue=(val:string)=>{
    return Number(val.toString().replace(type,''));
  }

  return (
    <div className="flex flex-col gap-2">
      <label>
        {label} ({value})
      </label>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={FormattedValue(value)}
        onChange={(e) =>
          onHandleStyleChange(e.target.value + type)
        }
      />
    </div>
  );
};

export default SliderField;
