import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import Next from './Next';


class MUi extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render () {
    console.log(baseTheme)
      return(
        <div>
            <RaisedButton label="Default" />
            <CircularProgress />
            <Next />
        </div>
      )
  }
}
MUi.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


export default MUi;
