import type { MultiSelectProps } from "@/types/index";

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedOptions,
  handleToggleOption,
  label
}) => {

  return (
    <div className="form-control py-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="bg-white shadow-md rounded">
        {options?.map((option, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 ${selectedOptions.includes(option) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-500 hover:text-white`}
            onClick={() => handleToggleOption(option as never)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
