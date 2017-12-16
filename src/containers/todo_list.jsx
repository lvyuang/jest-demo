import React from 'react'
import { connect } from 'react-redux'

const getList = () => dispatch => {
  fetch('/list', {
    method: 'GET'
  })
    .then(
      res => res.json(),
      err => console.error(err)
    )
    .then(list => {
      dispatch({
        type: 'get-list',
        list
      })
    })
    .catch(err => console.error(err))
}

class TodoList extends React.Component {
  componentDidMount () {
    this.props.getList()
  }

  render () {
    const { list } = this.props
    return (
      <ul>
        {list.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    )
  }
}

export default connect(state => ({
  list: state.list
}), {
  getList
})(TodoList)
