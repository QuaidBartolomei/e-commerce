import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useField } from 'formik';
import React from 'react';

export type SelectionInputProps = {
  name: string;
  selectionValues: string[];
};

export function FormikSelectionInput(props: SelectionInputProps) {
  const { name, selectionValues } = props;
  const [field] = useField(name);
  return (
    <FormControl
      sx={{
        width: 'fit-content',
        minWidth: 120,
      }}
      margin='normal'
    >
      <InputLabel id={`${name}_label`}>{name}</InputLabel>
      <Select label={name} required labelId={`${name}_label`} {...field}>
        {selectionValues.map((value, key) => (
          <MenuItem value={value} key={key}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
