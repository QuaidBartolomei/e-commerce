import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useItemDetailsState } from './useItemDetails';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

export default function useSizeSelect() {
  const classes = useStyles();
  const { item } = useItemDetailsState();
  const values = item.inventory
    .map((i) => i.size)
    .filter((v, i, a) => a.indexOf(v) === i);

  const [value, setValue] = useState(values[0]);

  const SizeSelect = () => (
    <FormControl className={classes.formControl}>
      <InputLabel id='size_label'>size</InputLabel>
      <Select
        required
        labelId='size_label'
        id='size'
        onChange={(e) => {
          setValue(e.target.value as string);
        }}
      >
        {values.map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return {
    SizeSelect,
    value,
  };
}
