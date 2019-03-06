import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer.js'

import DataTableContainer from './components/DataTableContainer.js';
import ColumnSelectorContainer from './components/ColumnSelectorContainer.js';

import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Provider store={store}>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Content">
            <ColumnSelectorContainer/>
            <DataTableContainer/>
        </div>
        </Provider>
        
          
      </div>
    );
  }
}

export default App;
