import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CourseList from './components/CourseList'
import './App.css'

import ControlledUnctontrRegister from './components/ControlledUnctontrRegister'

function App() {
  return (
    <div style={{ display: "flex", gap: "50px", padding: "40px" }}>
      <ControlledUncontrRegister />
      
    </div>
  );
}

export default App;