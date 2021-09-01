import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { ImageGalleryProvider } from './ImageGalleryState';
import SelectedImage from './SelectedImage';
import ThumbnailGrid from './ThumbnailGrid';

const useStyles = makeStyles(theme =>
  createStyles({
    imageGallery: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

type ImageGalleryProps = {
  imageUrls: string[];
} & React.HTMLProps<HTMLDivElement>;

export default function ImageGallery(props: ImageGalleryProps) {
  const classes = useStyles();
  const { imageUrls, className, children, ...divProps } = props;
  const filteredUrls = React.useMemo(() => {
    return imageUrls.filter((v, i, a) => a.indexOf(v) === i); // remove duplicates
  }, [imageUrls]);
  return (
    <ImageGalleryProvider imageUrls={filteredUrls}>
      <div className={`${classes.imageGallery} ${className}`} {...divProps}>
        <SelectedImage />
        <ThumbnailGrid />
      </div>
    </ImageGalleryProvider>
  );
}
