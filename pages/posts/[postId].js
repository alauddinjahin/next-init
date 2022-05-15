import Layout from '@/layouts/Layout';
import Head from 'next/head';
import Post from 'components/Post';

const PostDetail = ({ post , appName }) => {


  return (
      <Layout>
        <Head>
            <title>{appName}</title>
        </Head>
        <div>PostDetail</div>
        <Post
            post={post}
        />
      </Layout>
  )
}

export default PostDetail


export async function getStaticPaths(){

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json();

    return {
        fallback: 'blocking',
        paths: data.map( d => ({
            params: {
                postId: `${d?.id}`
            }
        }))
    }
}

export async function getStaticProps(context){
    
    const appName = process.env.APP_NAME;
    
    const postId = context.params.postId;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await res.json();

    return {
        props: {
            post: data,
            appName,
        },
        revalidate: 10
    }
}