import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);
interface Props {
  quantity: number;
  onChange: (quantity: number) => void;
}
const QuantitySelect = (props: Props) => {
  const { quantity, onChange } = props;
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='size_label'>Quantity</InputLabel>
      <Select
        labelId='size_label'
        id='size'
        value={quantity}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <MenuItem value={n} key={n}>
            {n}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default QuantitySelect;
