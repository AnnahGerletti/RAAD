import React from 'react'

class AddTask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newTask: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleChange (event) {
    this.setState({
      [event.target.value]: event.target.value
    })

handleAdd(event){
  const newTask = this.state
  
}
  }
  render () {
    const newTask = this.state
    return (
      <div>
        <imput name="newTask" onChange={this.handleChange} value={newTask} />
        <button onClick={this.handleAdd}>Add New Task</button>
      </div>
    )
  }
}
export default AddTask