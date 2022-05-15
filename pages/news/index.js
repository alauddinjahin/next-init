import Layout from '@/layouts/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
// import Layout from '../../components/layouts/Layout'


const news = () => {
  return (
      <Fragment>
      <Head>
        <title>News Page</title>
      </Head>

      <Layout>
        <h1>The great News</h1>
        <ul>
          <li>
            <Link href="/news/nextjs-is-a-great-framework-for-react">
              <a>NextJs is a great framework for react</a>
            </Link>
          </li>
          <li>NextJs is a great framework for dynamic routing</li>
        </ul>
      </Layout>
      </Fragment>
  )
}

export default news