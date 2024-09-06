import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import Foot from './components/Foot';

function App() {
  return (
    <div>
      <h1>App.jsx</h1>
      <Nav />
      <Outlet />
      <Foot />
    </div>
  )
}

export default App;
