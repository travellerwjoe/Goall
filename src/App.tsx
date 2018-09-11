import * as React from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import RouterManager from './RouterManager'
import Main from './components/Main'

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
  
        <Main>
          <Link to="/hello">Hello</Link>
          <RouterManager />
        </Main>
      </div>
    );
  }
}

export default App;
