import type { CollectionConfig } from 'payload'

import { getPageSEOConfig, pageSEOOptions } from '../lib/page-seo'
import { revalidatePageSEO } from '../lib/revalidate-page-seo'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'SEO страница',
    plural: 'SEO страницы',
  },
  admin: {
    group: 'SEO',
    useAsTitle: 'pageName',
    defaultColumns: ['pageName', 'pageKey', 'path', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'pageName',
      label: 'Страница',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Служебное поле. Заполняется автоматически по pageKey.',
      },
    },
    {
      name: 'pageKey',
      label: 'Ключ страницы',
      type: 'select',
      required: true,
      unique: true,
      index: true,
      options: pageSEOOptions,
      admin: {
        description:
          'Выберите существующий route проекта. Новые страницы через эту коллекцию не создаются.',
      },
    },
    {
      name: 'path',
      label: 'URL',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Служебное поле. URL маршрута заполняется автоматически.',
      },
    },
    {
      name: 'seoTitle',
      label: 'SEO Title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title страницы для тега <title>.',
      },
    },
    {
      name: 'seoDescription',
      label: 'SEO Description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Description страницы для meta description.',
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data || typeof data !== 'object') {
          return data
        }

        const pageKey = typeof data.pageKey === 'string' ? data.pageKey : null

        if (!pageKey) {
          return data
        }

        const pageConfig = getPageSEOConfig(pageKey)

        if (!pageConfig) {
          return data
        }

        return {
          ...data,
          pageName: pageConfig.label,
          path: pageConfig.path,
        }
      },
    ],
    afterChange: [
      async ({ doc }) => {
        const pageKey = typeof doc?.pageKey === 'string' ? doc.pageKey : null

        if (pageKey) {
          await revalidatePageSEO(pageKey)
        }

        return doc
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        const pageKey = typeof doc?.pageKey === 'string' ? doc.pageKey : null

        if (pageKey) {
          await revalidatePageSEO(pageKey)
        }

        return doc
      },
    ],
  },
}