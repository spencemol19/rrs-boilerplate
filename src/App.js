import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './assets/logo.svg';

class App extends Component {
  render() {
    const { 
      screenWidth, 
      isMobile, 
      isPhone 
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Redux and SCSS</h1>
        </header>
        <p className="App-intro">
          <b>Breakpoint utility reducer included:</b> <br/><br/>
          Current screen width: {screenWidth}px <br/><br/>
          Currently in: {isMobile ? isPhone ? 'Phone View' : 'Tablet View' : 'Desktop View'}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ util }) => Object.assign({}, util);

export default connect(mapStateToProps)(App);
