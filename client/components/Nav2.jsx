import React from 'react'
import {Link} from 'react-router-dom'

import data from '../../data/ranks'

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Nav2 = (props) => {
  const rank = props.match.params.rank
  const rankArray = data[rank]

  return (
    <div>
      <h5>{cap(rank)}</h5>
      <ul>
        {rankArray.map((e, key) => {
          return <li key={key}>
            <Link to={`/list/${rank}/${e.name}`}>
              {(e.name)}
            </Link>
          </li>
        })}
      </ul>
    </div>
  )

}

export default Nav2
