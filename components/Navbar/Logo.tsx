import * as React from 'react';

export default function SvgLogo({
  children,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id='logo_svg__Icons'
      xmlns='http://www.w3.org/2000/svg'
      x={0}
      y={0}
      viewBox='0 0 32 32'
      xmlSpace='preserve'
      width='1em'
      height='1em'
      {...props}
    >
      <style>
        {
          '.logo_svg__st0{fill:none;stroke:current;stroke-width:current;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
        }
      </style>
      <path
        className='logo_svg__st0'
        d='M2 16h14v14H2zM16 16h14v14H16zM6 2h14v14H6z'
      />
      <path
        className='logo_svg__st0'
        d='M5 27l4-8 4 8M7 24h4M16 6.4c-.7-.9-1.8-1.4-3-1.4-2.2 0-4 1.8-4 4s1.8 4 4 4c1.2 0 2.3-.5 3-1.4M24 23h-4v-4h4c1.1 0 2 .9 2 2s-.9 2-2 2zM24 27h-4v-4h4c1.1 0 2 .9 2 2s-.9 2-2 2z'
      />
    </svg>
  );
}
