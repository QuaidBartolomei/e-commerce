import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import React from 'react';
import { useImageGalleryState } from './ImageGalleryState';

const useStyles = makeStyles(theme =>
  createStyles({
    selectedImage: () => ({
      display: 'flex',
      justifyContent: 'center',
      width: 300,
      maxWidth: 300,
      position: 'relative',
      height: 320,
      [theme.breakpoints.up('sm')]: {
        height: 480,
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        flexGrow: 1,
      },
      marginBottom: theme.spacing(1),
      '&:hover': {
        cursor: 'pointer',
      },
      border: 'thin solid black',
    }),
    container: {
      height: '100%',
      width: '100%',
    },
  })
);

export default function SelectedImage() {
  const { selectedImage } = useImageGalleryState();
  const classes = useStyles({ imageUrl: selectedImage });
  return (
    <Link
      href={selectedImage}
      rel='noreferrer noopener'
      target='_blank'
      className={classes.selectedImage}
    >
      <Image
        src={selectedImage}
        layout='fill'
        objectFit='contain'
        alt='product'
      />
    </Link>
  );
}
