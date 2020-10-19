import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { signout } from 'utils/auth.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const Signout = () => {
  const classes = useStyles();
  React.useEffect(()=>{
    signout();
  }, [])
  return <div className={classes.container}></div>;
};

export default Signout;