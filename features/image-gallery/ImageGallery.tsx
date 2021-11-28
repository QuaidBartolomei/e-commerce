import Box, { BoxProps } from '@mui/material/Box'
import React from 'react'
import { ImageGalleryProvider } from './ImageGalleryState'
import SelectedImage from './SelectedImage'
import ThumbnailGrid from './ThumbnailGrid'

type ImageGalleryProps = {
  imageUrls: string[]
} & BoxProps

export default function ImageGallery(props: ImageGalleryProps) {
  const { imageUrls, className, children, ...boxProps } = props
  const filteredUrls = React.useMemo(() => {
    return imageUrls.filter((v, i, a) => a.indexOf(v) === i) // remove duplicates
  }, [imageUrls])
  return (
    <ImageGalleryProvider imageUrls={filteredUrls}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        {...boxProps}
      >
        <SelectedImage />
        <ThumbnailGrid />
      </Box>
    </ImageGalleryProvider>
  )
}
