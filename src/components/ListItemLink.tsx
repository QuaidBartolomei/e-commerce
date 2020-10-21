import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import React from 'react';

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component='a' {...props} />;
}

export default ListItemLink;
