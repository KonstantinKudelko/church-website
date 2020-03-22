import { useRouter } from 'next/router'

import { Layout } from '~/widgets'

function useArticleName() {
  return useRouter().query.name as string
}

const Article = () => {
  const articleName = useArticleName()

  return (
    <Layout>
      <small>article name:</small>
      <h1>{articleName}</h1>
    </Layout>
  )
}

export default Article
