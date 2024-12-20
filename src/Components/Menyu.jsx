import React from "react";
import { NavLink } from "react-router-dom";

export const Menyu = () =>{
   return(
    <div className='menyu'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      </div>  
   )
}