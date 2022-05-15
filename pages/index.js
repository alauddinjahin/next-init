
import Layout from '@/layouts/Layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

export default function Home() {

  const appName = process.env.APP_NAME;
  return (
    <Layout>
        <Head>
          <title>{appName}</title>
        </Head>
        <h1 className={styles.h1}>Home page</h1>
    </Layout>
  )
}
