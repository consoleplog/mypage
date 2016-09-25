import React, { PropTypes } from 'react';
import Nav from './components/Nav';
import Btn from './components/Btn';




class Add extends React.Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  setContent(){
    this.setState({show:!this.state.show})
  }
  render () {
    let content=(
      <div className="container" >
        <h1>赵文龙的个人网页</h1>
        <p className='logp'>Zhao Wenlong Personal Website</p>
        <Nav />
        {this.props.children}
      </div>
    )
    let styles={
      root:{
        transition:'all .7s',
        top:this.state.show? '30vh' : '0'
      }
    }
    return(
      <div className='boxout' style={styles.root}>
        {this.state.show ? content : null }
        <Btn myFun={this.setContent.bind(this)} />
      </div>
    )
  }
}

export default Add;
