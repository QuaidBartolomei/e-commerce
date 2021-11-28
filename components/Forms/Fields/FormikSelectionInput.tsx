import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useField } from 'formik'
import React from 'react'

export type SelectionInputProps = {
  name: string
  selectionValues: string[]
}

export function FormikSelectionInput(props: SelectionInputProps) {
  const { name, selectionValues } = props
  const [field] = useField(name)
  return (
    <FormControl
      sx={{
        width: 'fit-content',
        minWidth: 120,
      }}
      margin="normal"
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
  )
}
