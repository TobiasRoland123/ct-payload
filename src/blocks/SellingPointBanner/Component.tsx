import React from 'react'
import { SellingPointBannerBlock as SellingPointBannerBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const SellingPointBannerBlock: React.FC<SellingPointBannerBlockProps> = ({
  sellingpoints,
  links,
  title,
  media,
}) => {
  console.log('links:', links)
  return (
    <article className={'md:grid grid-cols-2 gap-8 container'}>
      <div className={'relative aspect-auto h-full'}>
        <Media resource={media} imgClassName={'object-cover overflow-hidden'} fill />
      </div>
      <div>
        <h2 className={'text-3xl'}>{title}</h2>
        {sellingpoints && <RichText data={sellingpoints} className={'mt-4'} enableGutter={false} />}
        <div className={'mt-4'}>
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </article>
  )
}
