import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './styles.css';

function ScrollReset(){const {pathname,hash}=useLocation();useEffect(()=>{if(hash){setTimeout(()=>document.querySelector(hash)?.scrollIntoView({behavior:'smooth'}),60)}else window.scrollTo({top:0,left:0,behavior:'instant'})},[pathname,hash]);return null}
export default function App(){return <BrowserRouter><ScrollReset/><TopBar/><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/><WhatsApp/></BrowserRouter>}
