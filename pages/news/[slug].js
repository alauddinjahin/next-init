import Layout from '@/layouts/Layout';
import { useRouter } from 'next/router'
// import Layout from '../../components/layouts/Layout';

const DetailsPage = ({ slug }) => {
  // const router = useRouter();
  // const slug = router.query.slug;

  return (
    <Layout>
      <h1>News Id: {slug}</h1>
    </Layout>
  )
}

// export const getStaticPaths = async ()=>{

  // return {
  //   fallback: 'blocking',
  //   paths: [
  //     {
  //       params: {
  //         slug: 'xxx'
  //       }
  //     },
  //     {
  //       params: {
  //         slug: 'nextjs-is-a-great-framework-for-react' // if slug match then it will work
  //       }
  //     },
  //   ]
  // }
// }

// export const getStaticProps = async (context)=> {


//   // call api 

//   return {
//     props: {
//       slug: context.params.slug
//     }
//   }
// }

export const getServerSideProps = async (context)=> {

  const req = context.req;
  const res = context.res;

  // console.log(res);

  // call api 

  return {
    props: {
      slug: context.params.slug
    }
  }
}

export default DetailsPage
