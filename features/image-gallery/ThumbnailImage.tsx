import Paper from '@mui/material/Paper'
import Image from 'next/image'
import React from 'react'
import { useImageGalleryDispatch } from './ImageGalleryState'

type ThumbnailImageProps = {
  image: string
  selected: boolean
}

export default function ThumbnailImage({
  image,
  selected,
}: ThumbnailImageProps) {
  const dispatch = useImageGalleryDispatch()
  const [isHover, setIsHover] = React.useState(false)
  const elevated = isHover || selected
  return (
    <Paper
      sx={{
        width: 64,
        height: 64,
        m: 0.2,
        position: 'relative',
        ':hover': {
          cursor: 'pointer',
        },
      }}
      onClick={() => dispatch({ type: 'set_selected_image', payload: image })}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      elevation={elevated ? 3 : 0}
    >
      <Image
        unoptimized
        src={image}
        layout="fill"
        objectFit="cover"
        alt="product"
      />
    </Paper>
  )
}
