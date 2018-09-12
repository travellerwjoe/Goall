import * as React from 'react';
import './App.css'
import RouterManager from './RouterManager'
import Main from './components/Main'

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Main>
        <RouterManager />
      </Main>
    );
  }
}

export default App;
