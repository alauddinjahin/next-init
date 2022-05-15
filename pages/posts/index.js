// import Layout from 'components/layouts/Layout';
import Layout from '@/layouts/Layout';
import Post from 'components/Post';

const Posts = ({ posts }) => {
  return (
    <Layout>
          <div>
              {
                  posts.map(post => (
                      <Post
                          key={post.id}
                          post={post}
                      />
                  ))
              }
          </div>
    </Layout>
  )
}

export default Posts


export async function getStaticProps(){

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            posts: data
        },
        revalidate: 10
    }
}