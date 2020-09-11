import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const ItemDetails = () => {
  let { id } = useParams<{ id: string }>();
  
  const classes = useStyles();
  return <div className={classes.container}>Hello world</div>;
};

export default ItemDetails;
