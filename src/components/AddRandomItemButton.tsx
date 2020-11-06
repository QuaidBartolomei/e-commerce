import Button from '@material-ui/core/Button';
import React from 'react';
import { generateItemAndAddToDb } from 'utils/shop-items.utils';


const AddRandomItemButton = () => {
  function onClick() {
    generateItemAndAddToDb();
  }
  return <Button onClick={onClick}>Add New Item</Button>;
};

export default AddRandomItemButton;
