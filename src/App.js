import React from 'react'
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';

import {logo } from "./assets";
import {Home , CreatePost} from './Pages'


const App = () => {
  return (
   <BrowserRouter>
   <header className='w-full flex justify-between items-center bg-[#d8caca] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
<Link to="/">
     <img src={logo} alt='logo' className='w-28 object-contain '/>
</Link>
  
<Link to="/CreatePost" className='font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md '>Create</Link>
   </header>
   <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-75px)] '>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/CreatePost' element={<CreatePost/>}></Route>
    </Routes>
   </main>
    
   </BrowserRouter>
  )
}
export default App;
