import { MessageCircle } from 'lucide-react';
import { company } from '../data/site';
export default function WhatsApp(){return <a className="whatsapp" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={23}/></a>}
