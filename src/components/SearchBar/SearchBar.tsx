import type { SearchBarProps } from '@/types/index';
import React from 'react';

const SearchBar: React.FC<SearchBarProps> = ({ searchLabel, handleSearch }) => (
  <div className="form-control lg:w-96">
    <label className="label">
      <span className="label-text">{searchLabel}</span>
    </label>
    <input
      type="text"
      placeholder="Search article"
      className="input input-bordered input-primary w-full"
      onChange={handleSearch}
    />
  </div>
)

export default SearchBar;
