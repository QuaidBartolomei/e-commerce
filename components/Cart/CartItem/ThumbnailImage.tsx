import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

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
        width: {
          xs: 64,
          sm: 128,
        },
        height: {
          xs: 64,
          sm: 128,
        },
        mr: 2,
        mt: 0.5,
        minWidth: 64,
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
