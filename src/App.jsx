
import './App.css'
import Home from './home/homePage/Home'
import AboutTeam from './home/AboutTeam/AboutTeam'
import AboutUs from './home/AboutUs/AboutUs'
import Portfolio from './home/Portfolio/Portfolio'
import Contact from './home/Contact/Contact'



import Service from './home/ServicesHome/services01/Service'

import Header from './home/Header/Header'


import NotFound404 from './home/notFound404/NotFound404'


import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Film from './home/ServicesHome/Film/Film'


import Branding from './home/ServicesHome/Branding/Branding'

import Art from './home/ServicesHome/ArtCreation/Art'

function App() {
  

  return (
   <>

   
   
   
    

   

    

    <BrowserRouter>
     <Header/>


     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/team' element={<AboutTeam/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/film' element={<Film/>}/>
      <Route path='/branding' element={<Branding/>}/>
      <Route path='/art' element={<Art/>}/>

      

      <Route path='*' element={ <NotFound404/>}/> 
      

     </Routes>
    </BrowserRouter>
   
 


   </>
  )
}

export default App
