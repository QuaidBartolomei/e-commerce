import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: 'white',
  },
  fullList: {
    width: 'auto',
  },
});

const UserButton = () => {
  const classes = useStyles();

  const [showDrawer, setShowDrawer] = React.useState(false);
  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component='a' {...props} />;
  }
  return (
    <React.Fragment>
      <IconButton onClick={() => setShowDrawer(true)}>
        <AccountCircleIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <div className={classes.list}>
          {' '}
          <List component='nav' aria-label='main mailbox folders'>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Inbox' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary='Drafts' />
            </ListItem>
          </List>
          <Divider />
          <List component='nav' aria-label='secondary mailbox folders'>
            <ListItem button>
              <ListItemText primary='Trash' />
            </ListItem>
            <ListItemLink href='#simple-list'>
              <ListItemText primary='Spam' />
            </ListItemLink>
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};
export default UserButton;
