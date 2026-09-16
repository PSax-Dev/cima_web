import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems } from '../data/site';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  return <header className="navbar-wrap"><div className="container nav-inner">
    <Link className="brand" to="/" onClick={()=>setOpen(false)}><span className="brand-mark">C</span><span><b>CIMA</b><small>TECHNICAL LTD</small></span></Link>
    <nav className="desktop-nav">{navItems.map(item=><NavLink key={item.label} to={item.path} className={({isActive})=>isActive?'active':''}>{item.label}</NavLink>)}</nav>
    <Link className="nav-cta" to="/contact">Get a Quote <ArrowUpRight size={15}/></Link>
    <button className="menu-btn" aria-label="Toggle menu" onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
  </div>
  <AnimatePresence>{open&&<motion.div className="mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{navItems.map((item,i)=><motion.div key={item.label} initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:i*.04}}><Link to={item.path} onClick={()=>setOpen(false)}>{item.label}</Link></motion.div>)}<Link className="mobile-cta" to="/contact" onClick={()=>setOpen(false)}>Get a Quote <ArrowUpRight size={16}/></Link></motion.div>}</AnimatePresence></header>
}
