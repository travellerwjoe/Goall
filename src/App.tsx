import * as React from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import RouterManager from './RouterManager'
import Header from './components/Header'

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
            
          </p> */}
        <Header />
        <Link to="/hello">Hello</Link>
        <RouterManager />
      </div>
    );
  }
}

export default App;
