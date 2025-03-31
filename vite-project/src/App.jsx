import React from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div >
<Navbar />
<Routes>
<Route path='/' element={<HomePage/>}/>
</Routes>
    </div>
  )
}

export default App
