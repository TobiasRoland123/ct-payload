import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { SpriteTypes } from '@/components/Sprite'

export const SellingPoints: Block = {
  slug: 'sellingpoints',
  interfaceName: 'SellingPointsBlock',
  fields: [
    { type: 'text', name: 'title', label: 'Title', required: true },
    {
      type: 'array',
      name: 'sellingPoints',
      label: 'Selling Points',
      maxRows: 5,
      fields: [
        { type: 'text', name: 'sellingPointTitle', label: 'Selling Point Title', required: true },
        {
          type: 'richText',
          name: 'sellingPointDescription',
          label: 'Selling Point Description',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          required: true,
        },
        {
          type: 'select',
          name: 'sellingPointIcon',
          label: 'Selling Point Icon',
          dbName: 'sellingPointIcon',
          options: SpriteTypes,
        },
      ],
    },
  ],
  labels: {
    plural: 'Selling Points',
    singular: 'Selling Point',
  },
}
