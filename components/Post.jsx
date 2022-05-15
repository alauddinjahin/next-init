import Link from 'next/link'

const Post = ({ post:{ userId, id, title, body } }) => {
  return (
      <Link href={`/posts/${id}`} passHref>
        <a>
            <div style={{ background: '#fefe' }}>
                <p>Post Id: {id}</p>
                <p>{title}</p>
            </div>
        </a>
    </Link>
  )
}

export default Post