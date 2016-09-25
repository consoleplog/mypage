import React, { PropTypes } from 'react'

class Btn extends React.Component {
  handClick(){
    this.props.myFun()
  }
  render () {
    return(
      <div>
        <button className='btn' onClick={this.handClick.bind(this)}></button>
      </div>
    )
  }
}

export default Btn;
