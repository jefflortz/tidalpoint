import { getWebPageSchema } from '@/app/schema'

export function PageSchema({
  path,
  name,
  description,
  type,
  mainEntityId,
}: {
  path: string
  name: string
  description: string
  type?: 'WebPage' | 'CollectionPage' | 'ContactPage' | 'ProfilePage'
  mainEntityId?: string
}) {
  const schema = getWebPageSchema({ path, name, description, type, mainEntityId })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
