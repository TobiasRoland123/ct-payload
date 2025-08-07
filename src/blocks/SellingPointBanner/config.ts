import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

export const SellingPointBanner: Block = {
  slug: 'sellingpointbanner',
  interfaceName: 'SellingPointBannerBlock',
  fields: [
    { type: 'text', name: 'title', label: 'Title', required: true },
    {
      name: 'sellingpoints',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: false,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 1,
      },
    }),

    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  labels: {
    plural: 'Selling Point Banners',
    singular: 'Selling Point Banner',
  },
}
