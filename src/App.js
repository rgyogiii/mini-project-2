import React from 'react'
import Homepage from './homepage/homepage'

function App() {
  return (
    <div>
    <img src={process.env.PUBLIC_URL+"/img/creatives/bg-podium.svg"} alt="header img"/>
    <Homepage/>
    </div>
  )
}

export default App