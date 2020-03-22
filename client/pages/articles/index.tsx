import '~/utils/init'
import { h } from 'preact'

import { Link } from '~/blocks'
import { Layout } from '~/widgets'

const Home = () => {
  const articlesList = ['test']

  return (
    <Layout>
      <h1>Articles</h1>
      <ul>
        {articlesList.map(articleName => (
          <li>
            <Link href={`articles/${articlesList}`}>{articleName}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Home
