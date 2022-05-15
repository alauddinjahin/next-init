import Link from 'next/link'
import styles from "./Nav.module.css";
import { useSession, signIn, signOut} from "next-auth/react"
import Image from 'next/image';

const Nav = () => {

  const { data: session } = useSession()

  return (
    <nav style={{ display:'flex', alignItems:'center' }}>
      <div>
        {
          !session ? 'NextAuth' : (
            <>
              <Image 
                src={session?.user?.image} 
                width={20}
                height={20}
                layout="responsive"
               />
              <span>{session.user?.name}</span>
            </>
          )
        }
        
      </div>
      <ul className={styles.ul}>
        <li>
          <Link href={'/'}>
          <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/users'}>
          <a>Users</a>
          </Link>
        </li>

        {
          !session ? <li>
            <Link href={'/api/auth/signin'}>
              <a onClick={(e) => {
                e.preventDefault()
                signIn('github')
              }}>SignIn</a>
            </Link>
          </li> : 
            <li>
              <Link href={'/api/auth/signout'}>
                <a onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}>SignOut</a>
              </Link>
            </li>
        }
        
        
      </ul>
    </nav>
  )
}

export default Nav