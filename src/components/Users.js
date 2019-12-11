import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from './Spinner'
import GithubContext from '../context/github/githubContext'

const Users = () => {

  const githubContext = useContext(GithubContext)
  const { loading, users } = githubContext
  
    return( 
      <div style={userStyle}>
        { loading && <Spinner /> }
        { !loading && users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
}


export default Users