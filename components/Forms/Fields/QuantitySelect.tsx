import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';

interface Props {
  quantity: number;
  onChange: (quantity: number) => void;
}

const QuantitySelect = (props: Props) => {
  const { quantity, onChange } = props;
  return (
    <FormControl
      sx={{
        width: 'fit-content',
        minWidth: 120,
      }}
      margin='normal'
    >
      <InputLabel id='size_label'>Quantity</InputLabel>
      <Select
        labelId='size_label'
        id='size'
        label='Quantity'
        value={quantity}
        onChange={e => onChange(Number(e.target.value))}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
          <MenuItem value={n} key={n}>
            {n}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default QuantitySelect;
