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
          sm: 480,
        },
        width: {
          xs: '100%',
          sm: 300,
        },
        flexGrow: {
          xs: 1,
          sm: 0,
        },
        mb: 1,
        ':hover': {
          cursor: 'pointer',
        },
        border: 'thin solid black',
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
