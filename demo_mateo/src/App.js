import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Home from './components/Home';
import './App.css';
import TokenContext from './contexts/TokenContext';
import TokenContextProvider from './contexts/TokenContext';


function App() {
  const { token } = useContext(TokenContext);
  

  return (
    <TokenContextProvider>
      { token ? <Home/> : <Login/> }
    </TokenContextProvider>

  )     
}

export default App;
