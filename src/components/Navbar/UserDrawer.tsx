import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemLink from 'components/ListItemLink';
import React from 'react';
import { Routes } from 'Router';
import { useUserState } from 'user/UserContext';
import { signout } from 'utils/auth.utils';


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
