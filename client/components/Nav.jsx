import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {

  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const ranks = props.ranks
  
  return (
    <div>
      <h5> Rank </h5>
      <ul>
        {ranks.map((rank, key) => {
          return <li key={key}>
            <Link to={`/list/${rank}`}>
              {cap(rank)}
            </Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Nav
