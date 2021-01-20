import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useItemDetailsDispatch, useItemDetailsState } from './useItemDetails';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: 'fit-content',
      minWidth: 120,
      paddingLeft: theme.spacing(1),
    },
  })
);

const SizeSelect = () => {
  const classes = useStyles();

  const { item, selectedSize } = useItemDetailsState();
  const dispatch = useItemDetailsDispatch();

  const sizes = item.inventory.map((i) => i.size);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='size_label'>Size</InputLabel>
      <Select
        required
        labelId='size_label'
        id='size'
        value={selectedSize}
        onChange={(e) => {
          const newSize = e.target.value as string;
          dispatch({ type: 'set_selected_size', payload: newSize });
        }}
      >
        {sizes.map((size) => (
          <MenuItem value={size}>{size}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SizeSelect;
