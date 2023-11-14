"use client";
import { DatePickerProps } from '@/types/index';

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  handleDateChange,
  selectedDate,
}) => {

  return (
    <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input type="date" className="input input-bordered" value={selectedDate} onChange={handleDateChange} />
  </div>
  );
};

export default DatePicker;
