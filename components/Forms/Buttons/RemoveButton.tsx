import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { useUserDispatch } from 'components/User/user.context';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>
  createStyles({
    removeButton: {
    },
  })
);

export type RemoveButtonProps = {
  itemId: string;
};

export default function RemoveButton({ itemId }: RemoveButtonProps) {
  const classes = useStyles();
  const userDispatch = useUserDispatch();

  function onRemove() {
    userDispatch({
      type: 'remove_item',
      payload: itemId,
    });
  }
  return (
    <Button
      className={classes.removeButton}
      color='secondary'
      onClick={onRemove}
      variant='outlined'
    >
      Remove
    </Button>
  );
}
