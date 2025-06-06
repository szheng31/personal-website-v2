import type { CollectionConfig } from 'payload'

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title', 
    defaultColumns: ['title', 'organization', 'startDate', 'endDate'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'organization',
      type: 'text',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'current',
      type: 'checkbox',
      label: 'Display with black bullet?',
      defaultValue: false,
    }
  ]
}
