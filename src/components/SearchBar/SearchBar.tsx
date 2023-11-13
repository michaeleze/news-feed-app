import { SEARCH_LABEL } from '@/constants';
import { SearchBarProps } from '@/types/index';
import React from 'react';

const SearchBar: React.FC<SearchBarProps> = ({searchLabel = SEARCH_LABEL}) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{searchLabel}</span>
    </label>
    <input type="text" placeholder="Search article" className="input input-bordered input-primary w-full" />
  </div>
)

export default SearchBar;
