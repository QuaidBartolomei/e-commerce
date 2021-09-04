import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
