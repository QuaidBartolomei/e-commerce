import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useImageGalleryDispatch } from '../ImageGallery';

const useStyles = makeStyles(theme =>
  createStyles({
    thumbnailImage: (props: { image: string; selected: boolean }) => ({
      width: '20%',
      height: 64,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${props.image})`,
      border: 'black 1px solid',
      '&:hover': {
        cursor: 'pointer',
      },
    }),
  })
);

interface Props {
  image: string;
  selected: boolean;
}

export default function ThumbnailImage({ image, selected }: Props) {
  const dispatch = useImageGalleryDispatch();
  const classes = useStyles({ image, selected });
  return (
    <Box
      className={classes.thumbnailImage}
      onClick={() => dispatch({ type: 'set_selected_image', payload: image })}
    />
  );
}
