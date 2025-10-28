import React from 'react'
import { SellingPointBannerBlock as SellingPointBannerBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { Sprite } from '@/components/Sprite'

export const SellingPointBannerBlock: React.FC<SellingPointBannerBlockProps> = ({
  sellingPoints,

  title,
}) => {
  console.log('sellingPoints', sellingPoints)
  console.log('title', title)

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sellingPoints?.map((sellingPoint, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                  {sellingPoint.sellingPointIcon && (
                    <Sprite sprite={sellingPoint.sellingPointIcon} size={56} />
                  )}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-balance">
                {sellingPoint.sellingPointTitle}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {sellingPoint.sellingPointDescription && (
                  <RichText
                    className="mb-0"
                    enableProse={false}
                    enableGutter={true}
                    data={sellingPoint.sellingPointDescription}
                  />
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
