import { ListItem, ListItemProps } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Categories } from 'models/shop-item/shop-item.db';
import React from 'react';
import { Routes, routeToCategoryPage } from 'Router';

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: 250,
      backgroundColor: 'white',
    },
  })
);
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const NavigationDrawer = (props: Props) => {
  const classes = useStyles();
  const { isOpen, onClose } = props;

  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component='a' {...props} />;
  }
  return (
    <Drawer anchor='left' open={isOpen} onClose={onClose}>
      <List
        component='nav'
        aria-label='main mailbox folders'
        className={classes.list}
      >
        <ListItemLink href={Routes.ShoppingCart}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary='Cart / Checkout' />
        </ListItemLink>
        {Categories.map((category) => (
          <ListItemLink href={routeToCategoryPage(category)} key={category}>
            <ListItemText primary={category} />
          </ListItemLink>
        ))}
      </List>
    </Drawer>
  );
};

export default NavigationDrawer;
