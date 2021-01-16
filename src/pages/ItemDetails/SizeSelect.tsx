import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { ClothingSize } from 'models/shop-item/shop-item.db';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: 'fit-content',
      minWidth: 120,
      paddingLeft:theme.spacing(1)
    },
  })
);

const SizeSelect = (props: { onChange: (size: ClothingSize) => void }) => {
  const { onChange } = props;
  const classes = useStyles();
  const [size, setSize] = React.useState<ClothingSize>('S');
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='size_label'>Size</InputLabel>
      <Select
        required
        labelId='size_label'
        id='size'
        value={size}
        onChange={(e) => {
          let newSize = e.target.value as ClothingSize;
          setSize(newSize);
          onChange(newSize);
        }}
      >
        <MenuItem value={'S'}>S</MenuItem>
        <MenuItem value={'M'}>M</MenuItem>
        <MenuItem value={'L'}>L</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SizeSelect;
