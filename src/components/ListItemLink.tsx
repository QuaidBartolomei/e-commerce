import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  const classes = useStyles();
  return <ListItem button component='a' {...props} />;
}

export default ListItemLink;
