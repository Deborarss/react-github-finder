import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const { clearUsers, users, searchUsers } = githubContext
  const { setAlert} = alertContext
  const [text, setText] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    if(text === '') {
      setAlert('Preencha o campo', 'light')
    }else {
      searchUsers(text)
      setText('')
    }
  }

  const onChange = e => {
    setText(e.target.value)  
  }

    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input 
            type="text" 
            name="text" 
            placeholder="Procurar usuários" 
            value={text}
            onChange={onChange}
          />
          <input 
            type="submit" 
            value="Procurar"
            className="btn btn-dark btn-block" 
          />
        </form>
        { 
          users.length > 0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Limpar</button>
        }
      </div>
    )
  }

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default Search