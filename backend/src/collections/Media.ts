import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    afterRead: [
      // Prefix hook
      ({ doc }) => {
        const mediaUrl = process.env.PAYLOAD_PUBLIC_MEDIA_URL
        const toPrefix = [doc]
        toPrefix.forEach((el) => (el.url = mediaUrl + el.url))
        return doc
      },
    ],
  },
  upload: true,
}
