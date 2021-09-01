import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import Image from 'next/image';
import React from 'react';
import { useImageGalleryDispatch } from './ImageGalleryState';

import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thumbnailImage: () => ({
      width: 64,
      height: 64,
      margin: theme.spacing(0.2),
      position: 'relative',
      [theme.breakpoints.up('lg')]: {},
      '&:hover': {
        cursor: 'pointer',
      },
    }),
  })
);

type ThumbnailImageProps = {
  image: string;
  selected: boolean;
};

export default function ThumbnailImage({
  image,
  selected,
}: ThumbnailImageProps) {
  const dispatch = useImageGalleryDispatch();
  const classes = useStyles();
  const [isHover, setIsHover] = React.useState(false);
  const elevated = isHover || selected;
  return (
    <Paper
      className={classes.thumbnailImage}
      onClick={() => dispatch({ type: 'set_selected_image', payload: image })}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      elevation={elevated ? 3 : 0}
    >
      <Image
        unoptimized
        src={image}
        layout='fill'
        objectFit='cover'
        alt='product'
      />
    </Paper>
  );
}
