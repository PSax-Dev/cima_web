import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { services } from '../data/site';

export default function Services(){return <>
<PageHero title="Services" subtitle="We don't just serve you; we serve you professionally." image="https://images.unsplash.com/photo-1784915475851-326b1ebc072d?auto=format&fit=crop&w=1900&q=85"/>
<section className="section service-intro"><div className="container intro-grid"><Reveal><span className="eyebrow">Welcome to CIMA Technical Ltd</span><h2>Comprehensive Technical Solutions</h2></Reveal><Reveal delay={.12}><p>We provide comprehensive technical solutions designed to improve the performance, reliability, and longevity of industrial equipment and systems.</p><Button to="/contact">Book Appointment</Button></Reveal></div></section>
<section id="projects" className="section service-detail-section"><div className="container"><SectionTitle eyebrow="Our Services" title="Technical capability with a practical edge." description="Every engagement is shaped around the equipment, environment and operating reality of the customer."/>{services.map((s,i)=><Reveal key={s.slug} delay={i*.04}><article className={`service-detail ${i%2?'reverse':''}`}><div className="service-detail-image"><img src={s.image} alt={s.title}/><span>0{i+1}</span></div><div className="service-detail-copy"><span className="eyebrow">Our Service</span><h2>{s.title}</h2><p>{s.text}</p><div className="service-actions"><Button to="/contact">Book Appointment</Button><a className="text-link" href="https://wa.me/2349037769539" target="_blank" rel="noreferrer">Message Us <ArrowUpRight size={15}/></a></div></div></article></Reveal>)}</div></section>
</>}
