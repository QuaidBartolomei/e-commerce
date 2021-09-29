import Link from 'components/Link';
import Image from 'next/image';
import React from 'react';
import { useImageGalleryState } from './ImageGalleryState';

export default function SelectedImage() {
  const { selectedImage } = useImageGalleryState();
  return (
    <Link
      href={selectedImage}
      rel='noreferrer noopener'
      target='_blank'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: 300,
        position: 'relative',
        height: {
          xs: 320,
          md: 480,
        },
        width: {
          xs: '100%',
          md: 300,
        },
        flexGrow: {
          xs: 1,
          md: 0,
        },
        mb: 1,
        ':hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Image
        src={selectedImage}
        layout='fill'
        objectFit='contain'
        alt='product'
        unoptimized
      />
    </Link>
  );
}
