import React from 'react';
import { Input } from 'antd';

const SearchBar = (props) => {
  return (
    <Input
      value={props.searchTerm}
      onChange={(e) => props.setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
