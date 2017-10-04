import React from 'react'
import {Link} from 'react-router-dom'

import data from '../../data/ranks'

const View = (props) => {
  const rank = props.match.params.rank
  const name = props.match.params.name
  // const desc = data[rank].find()

  console.log(desc);
  console.log(rank, name);

  return (
    <div>
      <h5>Description</h5>
      <p></p>
    </div>
  )

}

export default View
