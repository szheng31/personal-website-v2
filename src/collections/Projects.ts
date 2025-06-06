import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'id',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'modalDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'tech',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'github',
      type: 'text',
    }
  ],
  upload: true,
}
