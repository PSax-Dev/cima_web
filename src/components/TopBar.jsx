import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { company } from '../data/site';

export default function TopBar(){
  return <div className="topbar"><div className="container topbar-inner"><div className="topbar-left"><span>Industrial Companies</span><span className="topbar-dot">•</span><span>545 Port-Harcourt Road, Aba, Abia State, Nigeria</span></div><div className="topbar-right"><a href={`mailto:${company.email}`}><Mail size={13}/> {company.email}</a><a href={`tel:${company.phone.replace(/\s/g,'')}`}><Phone size={13}/> {company.phone}</a></div></div></div>
}
