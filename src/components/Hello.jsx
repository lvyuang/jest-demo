import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: red;
`

class Hello extends React.Component {
  constructor () {
    super()
    this.state = {
      text: 'Hello World!'
    }
  }

  click = () => {
    this.setState({
      ...this.state,
      text: this.state.text + ' clicked'
    })

    const { onClick } = this.props
    onClick && onClick()
  }

  render () {
    return (
      <Div onClick={this.click}>{this.state.text}</Div>
    )
  }
}

export default Hello