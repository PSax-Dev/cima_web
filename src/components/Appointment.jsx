import React from 'react';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { company } from '../data/site';

export default function Appointment(){
 const [sent,setSent]=useState(false);
 return <section className="contact-band"><div className="container contact-band-grid"><motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><span className="eyebrow light">Have a critical scope?</span><h2>Let's mobilize your next project.</h2><p>We don't just serve you; we serve you professionally.</p></motion.div><form className="quick-form" action={`https://formsubmit.co/${company.email}`} method="POST" onSubmit={()=>setSent(true)}><input type="hidden" name="_subject" value="New CIMA Technical website enquiry"/><input type="hidden" name="_captcha" value="false"/><input type="hidden" name="_template" value="table"/><div className="form-row"><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Email address" required/></div><div className="form-row"><input name="phone" placeholder="Phone number" required/><input name="service" placeholder="Service required" required/></div><textarea name="message" rows="4" placeholder="Tell us briefly about your project" required></textarea><button className="btn btn-red" type="submit">Send enquiry <Send size={16}/></button>{sent&&<small className="form-note"><CheckCircle2 size={15}/> Your form is ready to submit. The first FormSubmit submission may ask you to confirm the receiving email.</small>}</form></div></section>
}
