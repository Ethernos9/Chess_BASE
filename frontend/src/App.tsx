import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Landing from './screens/Landing'
import Game from './screens/Game'
const App = () => {
  return (
    <div className='bg-customGray w-ful h-screen' >
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/game" element={<Game />} />
         </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App