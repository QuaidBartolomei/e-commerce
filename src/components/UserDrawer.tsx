import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Routes } from 'Router';
import { useUserState } from 'UserContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { signout } from 'utils/user.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: 250,
      backgroundColor: 'white',
    },
  })
);

const UserDrawer = (props: { isOpen: boolean; onClose: () => void }) => {
  const classes = useStyles();
  const { isOpen, onClose } = props;
  const userState = useUserState();

  let isAuth = userState._id !== '';

  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component='a' {...props} />;
  }

  return (
    <Drawer anchor='right' open={isOpen} onClose={onClose}>
      <List
        component='nav'
        aria-label='main mailbox folders'
        className={classes.list}
      >
        {isAuth ? (
          <ListItem button onClick={signout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary='Sign Out' />
          </ListItem>
        ) : (
          <ListItemLink href={Routes.SignIn}>
            <ListItemText primary='Sign in / Register' />
          </ListItemLink>
        )}
      </List>
    </Drawer>
  );
};

export default UserDrawer;
