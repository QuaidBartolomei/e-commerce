import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { generateItemAndAddToDb } from 'utils/shop-items.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const AddRandomItemButton = () => {
  const classes = useStyles();
  function onClick() {
    generateItemAndAddToDb();
  }
  return <Button onClick={onClick}>Add New Item</Button>;
};

export default AddRandomItemButton;
