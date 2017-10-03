import React from 'react'
import {Link} from 'react-router-dom'

import data from '../../data/ranks'

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Nav2 = (props) => {

const rank = cap(props.match.params.rank)
const rankArray = []


  return (
    <div>
      <h5>{rank}</h5>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  )

}

export default Nav2
