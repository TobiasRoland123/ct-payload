import { Block } from 'payload'
import type { Field } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import { fields } from '@/blocks/Form/fields'

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
        {
          type: 'richText',
          name: 'richText',
          label: 'Rich Text',
          admin: { condition: (_, siblingData) => siblingData.type === 'textside' },
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: {
            maxRows: 1,
          },
        }),
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          admin: { condition: (_, siblingData) => siblingData.type === 'imageside' },
        },
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
        {
          type: 'richText',
          name: 'richText',
          label: 'Rich Text',
          admin: { condition: (_, siblingData) => siblingData.type === 'textside' },
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: {
            maxRows: 1,
          },
        }),
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          admin: { condition: (_, siblingData) => siblingData.type === 'imageside' },
        },
      ],
    },
  ],
}
