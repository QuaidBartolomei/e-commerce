import React from 'react';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';

export type ThumbnailImageProps = {
  href: string;
  imageUrls: string[];
};

export default function ThumbnailImage({
  href,
  imageUrls,
}: ThumbnailImageProps) {
  return (
    <ButtonBase
      sx={{
        width: 128,
        height: 128,
        mr: 2,
      }}
      href={href}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundImage: `url(${imageUrls[0]})`,
        }}
      />
    </ButtonBase>
  );
}
