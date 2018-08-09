import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'
import Loader from 'react-loader-spinner';
import './assets/css/App.css';

import * as actions from './actions';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

import NavBar from './components/Navbar';
import HomePage from './screens/HomePage';


class App extends Component {
  componentDidMount(){
    this.props.fetchCategories();
    
  }

  render() {
    const { categories, category } = this.props;
    
    return (
      <div>
        <div className="App">
        {categories.length > 0?
        (<div>
          <NavBar />
          <HomePage category={category} />
        </div>)
          :<div className="centered"><Loader type="Audio" color="#00BFFF" height="200" width="200"/></div>
        }
        </div>
      </div>
    );
  }
}

//mapping states to props foe react to accass the states via props
function mapStateToProps({ categories , category }){
  return {
    categories,
    category
  }
}

export default connect(mapStateToProps, actions)(App);
