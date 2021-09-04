import Box from '@mui/material/Box';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import React from 'react';

export type ImageButtonProps = {
  src: string;
} & ButtonBaseProps;

export default function ImageButton({ src, ...buttonProps }: ImageButtonProps) {
  return (
    <ButtonBase {...buttonProps}>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundImage: `url(${src})`,
        }}
      />
    </ButtonBase>
  );
}
