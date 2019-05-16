import React, { Component} from 'react';
import './assets/css/App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import Main from './components/Main';

class App extends Component{

  componentDidMount() {
    this.props.fetchCar()
  }
  render(){
    return(
      <Main/>
    )
  }
}

function matchStateToProps(state) {
  return {
    car: state.car
  }
}

export default connect(matchStateToProps, actions)(App);
