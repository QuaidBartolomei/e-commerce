import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
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
        <div className={classes.list}></div>
      </Drawer>
    </React.Fragment>
  );
};
export default UserButton;
