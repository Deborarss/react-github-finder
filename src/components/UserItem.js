import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 

const UserItem = ({ user: {html_url, avatar_url, login }}) => {

  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          Mais
        </Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem