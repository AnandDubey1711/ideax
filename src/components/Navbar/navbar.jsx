import React, { useState } from "react";
import "./navbar.css";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdDesignServices} from 'react-icons/md';

import {AiFillProject} from 'react-icons/ai';
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#header');
  return (
   
    <nav >
    <a href='#header' onClick={()=>setActiveNav('#header')} className={activeNav=== '#header'?'active':''}><AiOutlineHome/></a>
    <a href='#hero' onClick={()=>setActiveNav('#hero')} className={activeNav === '#hero'?'active':''}><AiOutlineUser/></a>
    <a href='#details' onClick={()=>setActiveNav('#details')} className={activeNav === '#details'?'active':''}><BiBook/></a>
    <a href='#algorithm' onClick={()=>setActiveNav('#algorithm')} className={activeNav === '#algorithm'?'active':''}><MdDesignServices/></a>
    <a href='#footer' onClick={()=>setActiveNav('#footer')} className={activeNav === '#footer'?'active':''}><AiFillProject/></a>
   </nav>
  
  );
};

export default Navbar;
