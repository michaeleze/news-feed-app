"use client";
import type { DatePickerProps } from '@/types/index';

const DatePicker: React.FC<DatePickerProps> = ({
    label,
    handlefilterByDate,
    selectedDate,
  }
) => {

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input type="date" className="input input-bordered" value={selectedDate} onChange={handlefilterByDate} />
    </div>
  );
};

export default DatePicker;
