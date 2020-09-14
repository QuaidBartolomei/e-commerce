import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import ImageGallery from 'components/ImageGallery';
import Container from '@material-ui/core/Container/Container';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const ItemDetails = () => {
  let { id } = useParams<{ id: string }>();

  const classes = useStyles();
  return (
    <Container maxWidth='sm'>
      <ImageGallery />
    </Container>
  );
};

export default ItemDetails;
