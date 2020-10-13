import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';
import UserDrawer from './UserDrawer';

const useStyles = makeStyles({
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
      <UserDrawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} />
    </React.Fragment>
  );
};
export default UserButton;
