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
        {
          type: 'select',
          name: 'serviceIcon',
          required: true,
          options: [
            { label: 'tools 🛠', value: '🛠️' },
            { label: 'oil 🛢', value: '🛢️' },
            { label: 'car 🚘', value: '🚘' },
            { label: 'car 🚘', value: '🚘' },
            { label: 'battery 🔋', value: '🔋' },
            { label: 'calendar 📅', value: '📅' },
          ],
        },
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
