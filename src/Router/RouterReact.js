import React from 'react'
import { BrowserRouter} from "react-router-dom";
import {Routes,Route } from 'react-router-dom'
import LoginFrom from '../Component/LoginFrom'
import RegistrationForm from '../Component/RegistrationForm'

const RouterReact = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginFrom/>}/>
    <Route path='/login' element={<LoginFrom/>}/>
    <Route path='/register' element={<RegistrationForm/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterReact
