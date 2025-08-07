import React from 'react'
import type { SideBySideBlock as SideBySideBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { richText } from 'payload/dist/fields/validations'
export const SideBySideBlock: React.FC<SideBySideBlockProps> = ({
  heading,
  leftside,
  rightside,
}) => {
  console.log('leftside:', leftside)
  console.log('rightside:', rightside)
  return (
    <section className={'container '}>
      {/*<h2>{heading}</h2>*/}
      <div className={'grid grid-cols-2 gap-8'}>
        <div>
          {leftside && leftside.type === 'imageside' && leftside?.media && (
            <Media resource={leftside.media} />
          )}
          {leftside && leftside.type === 'textside' && (
            // <div>im a left text side</div>
            <div>
              <div>{leftside.title}</div>
              {leftside.richText && (
                <RichText className="mb-0" data={leftside.richText} enableGutter={false} />
              )}
            </div>
          )}
        </div>
        <div>
          {rightside && rightside.type === 'imageside' && <Media resource={rightside.media} />}
          {rightside && rightside.type === 'textside' && (
            <div>
              <div>{rightside.title}</div>
              {rightside.richText && (
                <RichText className="mb-0" data={rightside.richText} enableGutter={false} />
              )}
            </div>
          )}
        </div>
      </div>
      {/*{imageDescription && theme === 'default' && (*/}
      {/*  <div className={styles.imageDescriptionWrapper}>*/}
      {/*    <p*/}
      {/*      className={cn(*/}
      {/*        styles.imageDescription,*/}
      {/*        rightside &&*/}
      {/*          !isBothSidesImage &&*/}
      {/*          rightSide.contentType === 'sideBySideImageItem' &&*/}
      {/*          styles.imageDescription___right,*/}
      {/*      )}*/}
      {/*    >*/}
      {/*      {imageDescription}*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*)}*/}
    </section>
  )
}
