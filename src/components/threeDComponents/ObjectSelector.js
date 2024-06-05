import React from 'react';
import { Select, MenuItem } from '@mui/material';

const ObjectSelector = ({ selectedObject, onSelectObject }) => {
  const handleChange = (event) => {
    onSelectObject(event.target.value);
  };

  return (
    <Select value={selectedObject} onChange={handleChange}>
      <MenuItem value="Triangle">Triangle</MenuItem>
      <MenuItem value="Rectangle">Rectangle</MenuItem>
      <MenuItem value="Circle">Circle</MenuItem>
    </Select>
  );
};

export default ObjectSelector;
