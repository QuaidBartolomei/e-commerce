import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useUserDispatch } from 'components/User/user.context';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => createStyles({

    removeButton: {
      cursor: 'pointer',
      textAlign: 'right',
      float: 'right',
    },
}));

export default function RemoveButton() {

  const classes = useStyles();
  const userDispatch = useUserDispatch();

  function onRemove() {
    userDispatch({
      type: 'remove_item',
      payload: id,
    });
  }
  return (
    <Button
      className={classes.removeButton}
      color='secondary'
      onClick={onRemove}
    >
      Remove
    </Button>
  );
}
