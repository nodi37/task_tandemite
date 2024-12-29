import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  labels: { singular: 'Produkt', plural: 'Produkty' },
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Typ',
      name: 'type',
      type: 'select',
      options: ['magazine', 'course'],
      defaultValue: 'magazine',
      required: true,
    },
    {
      label: 'Nazwa',
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      label: 'Opis',
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      label: 'Cena',
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      label: 'Źródło obrazu',
      name: 'imageSource',
      type: 'select',
      options: ['url', 'upload'],
      required: true,
    },
    {
      label: 'Zdjęcie',
      name: 'imageUrl',
      type: 'text',
      required: true,
      defaultValue: '/miniature1.webp',
      admin: {
        condition: (_, sbData) => sbData.imageSource === 'url',
      },
    },
    {
      label: 'Zdjęcie',
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, sbData) => sbData.imageSource === 'upload',
      },
    },
  ],
}
