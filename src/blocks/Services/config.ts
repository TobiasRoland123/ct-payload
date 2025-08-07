import type { Block } from 'payload'

export const Services: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlock',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
    },

    {
      type: 'array',
      name: 'services',
      label: 'Services',
      minRows: 1,
      fields: [
        { name: 'media', type: 'upload', relationTo: 'media' },
        { type: 'text', name: 'serviceName', label: 'Service Name' },
        { type: 'text', name: 'serviceDescription', label: 'Service Description' },
      ],
      required: true,
    },
  ],
  labels: {
    plural: 'Services',
    singular: 'Service',
  },
}
