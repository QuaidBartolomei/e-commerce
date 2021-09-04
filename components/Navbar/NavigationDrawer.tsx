import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Categories } from 'interfaces/shopItem.interface';
import React from 'react';
import routes from 'utils/routes';


interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const NavigationDrawer = (props: Props) => {
  const { isOpen, onClose } = props;

  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component='a' {...props} />;
  }
  return (
    <Drawer anchor='left' open={isOpen} onClose={onClose}>
      <List
        component='nav'
        aria-label='main mailbox folders'
        sx={{
          width: 250,
          backgroundColor: 'white',
        }}
      >
        <ListItemLink href={routes.cart}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary='Cart / Checkout' />
        </ListItemLink>
        {Categories.map(category => (
          <ListItemLink href={routes.category(category)} key={category}>
            <ListItemText primary={category} />
          </ListItemLink>
        ))}
      </List>
    </Drawer>
  );
};

export default NavigationDrawer;
