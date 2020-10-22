import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const SearchPage = () => {
  const classes = useStyles();
  let { query } = useParams<{ query: string }>();
  return <div className={classes.container}>{query}</div>;
};

export default SearchPage;
