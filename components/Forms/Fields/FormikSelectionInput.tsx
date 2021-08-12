import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useField } from 'formik';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    selectionInput: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

export type SelectionInputProps = {
  name: string;
  selectionValues: string[];
};

export function FormikSelectionInput(props: SelectionInputProps) {
  const classes = useStyles();
  const { name, selectionValues } = props;
  const [field] = useField(name);
  return (
    <FormControl className={classes.selectionInput}>
      <InputLabel id={`${name}_label`}>{name}</InputLabel>
      <Select required labelId={`${name}_label`} {...field}>
        {selectionValues.map(value => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
