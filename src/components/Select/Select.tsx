"use client";
import { SelectProps } from '@/types/index';

const Select: React.FC<SelectProps> = ({
  selectLabel,
  name,
  handleChange,
  options,
  selectedItem,
}) => {

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{selectLabel}</span>
      </label>
      <select className="select select-bordered" name={name} value={selectedItem} onChange={handleChange}>
        <option disabled>Select {selectLabel}</option>
        {options?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
