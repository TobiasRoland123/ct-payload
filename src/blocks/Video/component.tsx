import React from 'react'
import { VideoBlock as VideoBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
export const VideoBlock: React.FC<VideoBlockProps> = ({ media, controls }) => {
  return (
    <div className={'container'}>
      {media && <Media videoClassName={'w-full'} resource={media} controls={controls || false} />}
    </div>
  )
}
