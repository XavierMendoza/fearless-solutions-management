// PLACEHOLDER: Section marketing copy is for the client preview and needs approval.
import { House, Building2, Sparkles, KeyRound, BriefcaseBusiness, CalendarDays, ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
const icons = { House, Building2, Sparkles, KeyRound, BriefcaseBusiness, CalendarDays }
export default function Services() {
  return <section id="services" className="section container">
    <div className="section-heading"><div><p className="eyebrow">A CLEAN FOR EVERY KIND OF SPACE</p><h2>Your space. Your needs.<br /><span>Our attention to detail.</span></h2></div><p>From everyday upkeep to a fresh start,<br className="desktop-break" /> find the right clean for your life.</p></div>
    <div className="services-grid">{services.map((service, index) => {
      const Icon = icons[service.icon]
      return <a className="service-card" href={`#contact`} key={service.title}>
        <div className="service-top"><span className="icon-box"><Icon size={25} /></span><span className="service-number">0{index + 1}</span></div>
        <h3>{service.title}</h3><p>{service.description}</p><div className="service-bottom"><span>{service.detail}</span><ArrowUpRight size={19} /></div>
      </a>
    })}</div>
    <p className="section-footnote">Not sure where to start? <a href="#contact">Let’s find the right clean for you <ArrowUpRight size={14} /></a></p>
  </section>
}
