import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home/Home'
import List from './List/List'
import Hotel from './Hotels/Hotel'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/hotel' element={<Hotel />}></Route>



      </Routes>
      
      </BrowserRouter>




    </div>
  )
}

export default App