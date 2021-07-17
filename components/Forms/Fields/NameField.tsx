import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useFormikContext } from 'formik';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    EmailFieldContainer: {
      // styles here
    },
  })
);

export default function NameField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<{ name: string }>();
  return (
    <TextField
      id='name'
      label='Name'
      variant='outlined'
      name='name'
      value={values.name}
      onChange={handleChange}
      error={touched.name && Boolean(errors.name)}
      helperText={touched.name && errors.name}
    />
  );
}
