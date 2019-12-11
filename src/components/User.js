import React, { useEffect, useContext } from 'react'
import Spinner from './Spinner'
import Repos from './Repos'
import { Link } from 'react-router-dom'
import GithubContext from '../context/github/githubContext'

const User = ({ match }) => {

  const githubContext = useContext(GithubContext)

  const { getUser, loading, user, getUserRepos, repos } = githubContext

  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    // eslint-disable-next-line
  }, [])  

    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, company, hireable } = user

    if(loading) return <Spinner />

    return(
      <>
        <Link to='/' className='btn btn-light'>
          Voltar
        </Link>
        Disponível para contratação: {' '}
        {
          hireable ? <i className="fas fa-check"/> : <i className='fas fa-times-circle text-danger' />
        } 
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className="round-img" alt={name} style={{width: '150px'}}/>
            <h1>{name}</h1>
            <p>Local: {location}</p>
          </div>
          <div>
            {
              bio && 
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            }
            <a href={html_url} className="btn btn-dark my-1">Visitar Perfil Github</a>
            <ul>
              <li>
                {
                  login && 
                  <>
                    <strong>Usuário: </strong> {login}
                  </>
                }
              </li>
              <li>
                {
                  company && 
                  <>
                    <strong>Empresa: </strong> {company}
                  </>
                }
              </li>
              <li>
                {
                  blog && 
                  <>
                    <strong>Site:</strong> {blog}
                  </>
                }
              </li>
            </ul>
          </div>
        </div>

        <div className="card text-center">
          <div className="badge badge-primary">Seguidores: {followers}</div>
          <div className="badge badge-success">Seguindo: {following}</div>
          <div className="badge badge-light">Repositórios Publ: {public_repos}</div>
          <div className="badge badge-dark">Gists Publ {public_gists}</div>
        </div>

        <Repos repos={repos} />
      </>
    )
  }

export default User