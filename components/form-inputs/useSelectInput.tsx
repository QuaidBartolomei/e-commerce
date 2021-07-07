import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

export default function useSelectInput(name: string, values: string[]) {
  const classes = useStyles();

  const [value, setValue] = useState(values[0]);

  const SelectInput = () => (
    <FormControl className={classes.formControl}>
      <InputLabel id={`${name}_label`}>{name}</InputLabel>
      <Select
        required
        labelId={`${name}_label`}
        id={name}
        value={value}
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
    SelectInput,
    value,
  };
}
