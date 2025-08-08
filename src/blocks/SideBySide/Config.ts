import { Block, Field } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TextSideGroup: Field = {
  type: 'group',
  name: 'textside',
  label: 'TextSideGroup',
  admin: { condition: (_, siblingData) => siblingData.type === 'textside' },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      // admin: { condition: (_, siblingData) => siblingData.type === 'textside' },
    },
    {
      type: 'richText',
      name: 'richText',
      label: 'Rich Text',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      // admin: { condition: (_, siblingData) => siblingData.type === 'textside' },
    },
  ],
}

export const ImageSideGroup: Field = {
  type: 'group',
  name: 'imageside',
  label: 'ImageSideGroup',
  admin: { condition: (_, siblingData) => siblingData.type === 'imageside' },
  fields: [
    {
      type: 'upload',
      name: 'media',
      relationTo: 'media',
      // admin: { condition: (_, siblingData) => siblingData.type === 'imageside' },
    },
  ],
}

export const SideBySide: Block = {
  slug: 'sidebyside',
  interfaceName: 'SideBySideBlock',
  fields: [
    { type: 'text', name: 'heading', label: 'Heading', required: true },
    {
      type: 'group',
      name: 'leftside',

      label: 'LeftSide',
      fields: [
        {
          name: 'type',
          type: 'select',
          enumName: 'SideBySideType',
          defaultValue: 'textside',
          label: 'Type',
          options: [
            {
              label: 'textSide',
              value: 'textside',
            },
            {
              label: 'imageSide',
              value: 'imageside',
            },
          ],
          required: true,
        },
        TextSideGroup,
        ImageSideGroup,
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: {
            maxRows: 1,
          },
        }),
      ],
    },
    {
      type: 'group',
      name: 'rightside',
      label: 'RightSide',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: 'textside',
          label: 'Type',
          options: [
            {
              label: 'textSide',
              value: 'textside',
            },
            {
              label: 'imageSide',
              value: 'imageside',
            },
          ],
          required: true,
        },

        {
          type: 'text',
          name: 'title',
          label: 'Title',
          admin: { condition: (_, siblingData) => siblingData.type === 'textside' },
        },
        TextSideGroup,
        ImageSideGroup,
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: {
            maxRows: 1,
          },
        }),
      ],
    },
  ],
}
