import { useLayoutEffect, useState } from 'react'
import User from '../components/User'

const UserList = ({ data }) => {

    // const [data, setData] = useState([]);
    // useLayoutEffect(()=>{
    //     const res = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    //     .then(d => 
    //         setData(d)
    //     );
        
    // },[])

  return (
    <>
          <div>List of Users</div>
          <ul>
              {
                  data?.map(user => (
                      <li key={user?.id}>
                        <User user={user} />
                      </li>
                  ))
              }
          </ul>
    </>
  )
}

export default UserList

export async function getStaticProps(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {
            data: data
        },
        revalidate: 10
    }
}