import React from 'react'
import type { SideBySideBlock as SideBySideBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'

export const SideBySideBlock: React.FC<SideBySideBlockProps> = ({
  heading,
  leftside,
  rightside,
}) => {
  console.log('leftside:', leftside)
  console.log('rightside:', rightside)
  return (
    <section className={'container'}>
      <h2>{heading}</h2>
      <div>
        <div>
          {leftside && leftside.type === 'imageside' && (
            <div>im an left image side</div>
            // <SideBySideImage
            //   {...leftSide.side}
            //   isBothSidesImage={isBothSidesImage}
            //   otherSideEmpty={otherSideEmpty}
            // />
          )}
          {leftside && leftside.type === 'textside' && (
            <div>im a left text side</div>
            // <TextSideElement {...leftside.side} theme={theme} />
          )}
        </div>
        <div>
          {rightside && rightside.type === 'imageside' && (
            <div>im a right image side</div>
            // <SideBySideImage
            //   {...rightside.side}
            //   isBothSidesImage={isBothSidesImage}
            //   otherSideEmpty={otherSideEmpty}
            // />
          )}
          {rightside && rightside.type === 'textside' && (
            <div>im a right text side</div>
            // <TextSideElement {...rightside.side} theme={theme} />
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
