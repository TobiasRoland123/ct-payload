import { Media } from '@/components/Media'
import type { Props as MediaProps } from '@/components/Media/types'
import React from 'react'

export const SideBySideImage: React.FC<MediaProps> = (props) => {
  return <Media resource={props.resource} />
}
