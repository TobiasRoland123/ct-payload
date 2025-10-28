import React from 'react'
import type { SideBySideBlock as SideBySideBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'

import { SideBySideImage } from '@/components/SideBySideImage/SideBySideImage'
import { CMSLink } from '@/components/Link'
export const SideBySideBlock: React.FC<SideBySideBlockProps> = ({
  heading,
  leftside,
  rightside,
}) => {
  return (
    <section className={'container '}>
      <h2 className={'text-6xl'}>{heading}</h2>
      <div className={'md:grid grid-cols-2 gap-8'}>
        <div>
          {leftside && leftside.type === 'imageside' && leftside?.imageside?.media && (
            <SideBySideImage resource={leftside.imageside.media} />
          )}
          {leftside && leftside.type === 'textside' && (
            <div>
              <p className={'text-3xl mt-8'}>{leftside?.textside?.title}</p>
              {leftside?.textside?.richText && (
                <div className={'mt-4'}>
                  <RichText
                    className="mb-0"
                    data={leftside.textside.richText}
                    enableGutter={false}
                  />
                  {(leftside.links || []).map(({ link }, index) => {
                    console.log('specific link:', link)
                    return <CMSLink {...link} key={index} />
                  })}
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          {rightside && rightside.type === 'imageside' && (
            <SideBySideImage resource={rightside?.imageside?.media} />
          )}
          {rightside && rightside.type === 'textside' && (
            <div>
              <div>{rightside.title}</div>
              {rightside?.textside?.richText && (
                <div>
                  <RichText
                    className="mb-0"
                    data={rightside?.textside?.richText}
                    enableGutter={false}
                  />
                  {rightside.links?.map((link, index) => {
                    return <CMSLink key={index} {...link} size="lg" />
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
