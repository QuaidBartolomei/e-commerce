import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListItemLink from 'components/ListItemLink';
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

const NavigationDrawer = (props: { isOpen: boolean; onClose: () => void }) => {
  const classes = useStyles();
  const { isOpen, onClose } = props;

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
