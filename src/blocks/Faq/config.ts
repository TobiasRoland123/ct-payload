import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Faq: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  fields: [
    { type: 'text', name: 'title', label: 'Title', required: true },
    {
      type: 'array',
      name: 'accordions',
      label: 'Accordion',
      fields: [
        { type: 'text', name: 'question', label: 'Question', required: true },
        {
          type: 'richText',
          name: 'answer',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          label: false,
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'Faqs',
    singular: 'Faq',
  },
}
