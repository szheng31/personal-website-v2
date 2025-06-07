import type { CollectionConfig } from 'payload'


export const Resume: CollectionConfig = {
  slug: 'resume',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'resume',
    mimeTypes: ['application/pdf'],
    
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Name of the resume version'
      }
    },
    {
      name: 'isActive',
      type: 'checkbox',
      required: true,
      defaultValue: false,
      admin: {
        description: 'Is this the current active resume?'
      }
    }
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        // If this resume is being set as active
        if (data.isActive && (operation === 'create' || operation === 'update')) {
          // Set all other resumes to inactive
          await req.payload.update({
            collection: 'resume',
            where: {
              and: [
                {
                  id: {
                    not_equals: data.id,
                  },
                },
                {
                  isActive: {
                    equals: true,
                  },
                },
              ],
            },
            data: {
              isActive: false,
            },
          });
        }
        return data;
      },
    ],
  },
  admin: {
    useAsTitle: 'title',
    description: 'Upload and manage your resume',
    group: 'Content'
  }
}
