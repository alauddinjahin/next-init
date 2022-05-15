
const User = ({ user: { name, email } }) => {
  return (
    <div style={{ background: '#fdfd' }}>
        <p>{name ?? ''}</p>
        <p>{email ?? ''}</p>
    </div>
  )
}

export default User