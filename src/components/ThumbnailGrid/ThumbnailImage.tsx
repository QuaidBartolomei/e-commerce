import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>
  createStyles({
    thumbnail: {
      display: 'flex',
      justifyContent: 'center',
    },
    thumbnailImage: (props: { image: string; selected: boolean }) => ({
      width: '100%',
      height: '64px',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${props.image})`,
      border: props.selected ? 'black 1px solid' : 'none',
      margin: 1,
      '&:hover': {
        cursor: 'pointer',
        border: 'black 1px solid',
      },
    }),
  })
);

interface Props {
  image: string;
  selected?: boolean;
  onClick: () => void;
}

export default function ThumbnailImage(props: Props) {
  const { image, selected = false, onClick } = props;
  const classes = useStyles({ image, selected });
  return (
    <Grid item className={classes.thumbnail} onClick={() => onClick()} xs={3}>
      <Box className={classes.thumbnailImage} />
    </Grid>
  );
}
