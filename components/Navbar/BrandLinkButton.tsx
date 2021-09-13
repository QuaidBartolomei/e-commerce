import Link from 'components/Link';
import Image from 'next/image';
import React from 'react';
import routes from 'utils/routes';

export type BrandLinkButtonProps = {
  logoImage: string;
};

export default function BrandLinkButton({ logoImage }: BrandLinkButtonProps) {
  return (
    <Link
      href={routes.index}
      color='inherit'
      sx={{
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 40,
        width: 100,
      }}
      underline='none'
    >
      <Image
        src={logoImage}
        layout='fill'
        objectFit='contain'
        alt={'brand logo'}
      />
    </Link>
  );
}
