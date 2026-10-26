// PLACEHOLDER: Section marketing copy is for the client preview and needs approval.
import { useState } from 'react'
import { ArrowUpRight, Phone, Mail } from 'lucide-react'
import { businessInfo } from '../data/businessInfo'
import { services } from '../data/services'
import { previewSubmit } from '../utils/previewSubmit'
export default function Contact() {
  const [status, setStatus] = useState('')
  return <section id="contact" className="section contact-section"><div className="container contact-grid">
    <div className="contact-copy"><p className="eyebrow">LET’S MAKE YOUR SPACE SHINE</p><h2>Ready for a<br /><span>cleaner space?</span></h2><p>Tell us a little about what you need.<br />A fresh start begins with a conversation.</p><div className="contact-owner"><strong>{businessInfo.owner}</strong><span>{businessInfo.ownerTitle}</span></div><div className="contact-links">{businessInfo.phones.map(phone => <a href={phone.href} key={phone.href}><Phone size={19} />{phone.display}</a>)}<a href={`mailto:${businessInfo.email}`}><Mail size={19} />{businessInfo.email}</a></div></div>
    <form className="quote-form" onSubmit={event => previewSubmit(event, setStatus)}><h3>Let’s talk about your clean.</h3><p className="form-notice">Preview form — to reach Michael now, please call or email.</p><div className="form-grid">
      <label>Name<input name="name" autoComplete="name" placeholder="Your full name" required /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>Type of cleaning<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(service => <option key={service.title}>{service.title}</option>)}<option>Not sure yet</option></select></label>
    </div><label>Tell us about your space<textarea name="message" rows="4" placeholder="What would you like help with?" required /></label><button className="button" type="submit">Request a Free Quote<ArrowUpRight size={18} /></button><p className="form-status" role="status">{status}</p></form>
  </div></section>
}
