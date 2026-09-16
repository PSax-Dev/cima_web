import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function Button({children,to='#',outline=false,type='button'}){const cls=`btn ${outline?'btn-outline':''}`; return to==='#'?<button type={type} className={cls}>{children}<ArrowUpRight size={16}/></button>:<Link className={cls} to={to}>{children}<ArrowUpRight size={16}/></Link>}
