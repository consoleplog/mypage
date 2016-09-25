import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
  render () {
    return(
      <div className="Nav">
          <span style={{ marginTop:'5px',borderRadius:'5px',marginBottom:'5px',display:'block'}}>
              <Link to='/' activeStyle={{color:'#7C4DFF'}} onlyActiveOnIndex={true}><p className="glyphicon glyphicon-user"></p></Link>
              <Link to='/blog' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>Blog</span></Link>
              <Link to='/about' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>About</span></Link>
              <Link to='/item' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>Item</span></Link>
          </span>
      </div>
    )
  }
}

export default Nav;
