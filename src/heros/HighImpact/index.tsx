'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useMemo, useState } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, heroImages, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  // Ensure header is dark over imagery
  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  // Carousel state
  const validImages = useMemo(
    () =>
      (heroImages || []).filter(
        (m): m is NonNullable<typeof heroImages>[number] => !!m && typeof m === 'object',
      ),
    [heroImages],
  )
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!validImages.length) return
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % validImages.length)
    }, 12000) // 12s per slide
    return () => clearInterval(interval)
  }, [validImages.length])

  return (
    <div className="relative -mt-[10.4rem] flex flex-col  text-white bg-black" data-theme="dark">
      {/* Content Overlay */}
      <div className=" mb-8 z-20  container min-h-[80vh] flex items-center justify-center">
        <div className=" md:text-center ">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Carousel Background */}
      <div className="  select-none w-full z-10">
        <div className="h-full">
          {validImages.map((media, i) => (
            <div
              key={(typeof media === 'object' && (media as any)?.id) || i}
              className={[
                'absolute inset-0 transition-all duration-slow ease-in-out object-cover w-full',
                i === current ? 'opacity-100 left-30 ' : 'opacity-0 left-full',
              ].join(' ')}
              aria-hidden={i !== current}
            >
              <Media
                fill
                imgClassName="-z-10 object-cover w-full"
                priority={i === current}
                resource={media.media}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
