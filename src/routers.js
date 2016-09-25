import React, { Component } from 'react';
import { Router, Route, hashHistory , IndexRoute} from 'react-router';
import Add from './Add';
import Blog from './Blog/Blog';
import About from './About/About'
import Item from './Item/Item'


 export default class Routers extends Component {
  render() {
    return (
      <Router history={hashHistory}>
          <Route path="/" component={Add}>
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/item" component={Item} />
          </Route>
      </Router>
    );
  }
}
