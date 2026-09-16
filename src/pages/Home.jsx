import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Quote, Wrench, Snowflake, Package, Settings, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import Appointment from '../components/Appointment';
import { services, stats, testimonials } from '../data/site';

const icons=[Wrench,Snowflake,Package,Settings,Building2];
const heroImage='https://images.unsplash.com/photo-1629540946404-ebe133e99f49?auto=format&fit=crop&w=2200&q=88';
const aboutImage='https://images.unsplash.com/photo-1748347084012-075796185d56?auto=format&fit=crop&w=1400&q=85';

export default function Home(){return <>
<section className="hero-modern" style={{backgroundImage:`linear-gradient(90deg,rgba(4,15,26,.98) 0%,rgba(4,15,26,.82) 42%,rgba(4,15,26,.28) 100%),url(${heroImage})`}}>
  <div className="hero-grid container"><div className="hero-copy"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}><span className="eyebrow light">CIMA TECHNICAL LTD</span><h1>Excellence<br/><span>that creates</span><br/>impact.</h1><p>Specialist expertise across Oil & Gas, mechanical services, bolt tensioning, insulation and engineering support engineered for the world's most demanding operating environments.</p><div className="hero-actions"><Button to="/contact">Get a Quote</Button><Button to="/services" outline>View Services</Button></div></motion.div></div>
  <motion.div className="hero-side" initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.25}}><span>Industrial support</span><strong>Built around<br/>performance.</strong><ArrowDownRight/></motion.div></div>
  <div className="container hero-stats">{stats.map((s,i)=><motion.div key={s.label} initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.35+i*.08}}><strong>{s.value}</strong><span>{s.label}</span></motion.div>)}</div>
</section>

<section className="partner-strip"><div className="container"><span className="eyebrow">Trusted by industry leaders</span><h2>Partnering with the operators<br/>powering global energy</h2><div className="logos"><span>BRAMO</span><span>APPER</span><span>pieso</span><span>WAGNER</span><span>SAFRES</span><span>AZES</span><span>boson</span></div></div></section>

<section className="section about-preview"><div className="container about-preview-grid"><Reveal className="about-image-wrap"><img src={aboutImage} alt="Industrial engineering equipment"/><div className="image-badge"><strong>10+</strong><span>Years of experience</span></div></Reveal><Reveal delay={.12}><span className="eyebrow">About CIMA</span><h2>Top quality services that exceeds our customers expectation</h2><p>With a focus on durability and performance, the brand ensures that critical machinery and systems are maintained to the highest standards, reducing downtime and supporting long-term operational sustainability.</p><p>At the heart of every successful operation is reliability. We help organizations keep equipment working efficiently and make better technical decisions.</p><Link className="text-link" to="/about">Discover our story <ArrowUpRight size={16}/></Link></Reveal></div></section>

<section className="section light-section"><div className="container"><SectionTitle eyebrow="What we do" title="Specialist depth across five demanding sectors." description="Dependable engineering and technical solutions designed to keep equipment operating at peak performance."/><div className="service-mosaic">{services.map((s,i)=>{const Icon=icons[i];return <Reveal key={s.slug} delay={i*.07} className={`mosaic-card mosaic-${i}`}><img src={s.image} alt={s.title}/><div className="mosaic-overlay"><div className="service-icon"><Icon size={19}/></div><span>0{i+1}</span><h3>{s.title}</h3><Link to="/services">Explore <ArrowUpRight size={14}/></Link></div></Reveal>})}</div></div></section>

<section className="section sectors"><div className="container"><div className="sector-head"><div><span className="eyebrow">Our approach</span><h2>Engineered for demanding operations.</h2></div><p>We combine practical experience and professional dialogue to help you choose the right solution for your operational needs.</p></div><div className="sector-grid">{['Oil & Gas','Petrochemical','Manufacturing','Energy','Marine'].map((x,i)=><Reveal key={x} delay={i*.05}><div className="sector-card"><span>0{i+1}</span><h3>{x}</h3><CheckCircle2 size={17}/><p>Professional technical support focused on reliability, safety and long-term performance.</p></div></Reveal>)}</div></div></section>

<section className="section testimonials"><div className="container"><SectionTitle eyebrow="What operators say" title="What our clients say after we leave site." align="center"/><div className="quote-grid">{testimonials.map((t,i)=><Reveal key={i} delay={i*.08}><article className="quote-card-new"><Quote size={22}/><p>“{t.quote}”</p><strong>{t.author}</strong><span>{t.role}</span></article></Reveal>)}</div></div></section>
<Appointment/>
</>}
