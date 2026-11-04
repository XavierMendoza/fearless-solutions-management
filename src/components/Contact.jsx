import { Phone, Mail } from 'lucide-react'
import { businessInfo } from '../data/businessInfo'
import { quoteEmailUrl } from '../data/contactLinks'
import EmailContact from './EmailContact'

export default function Contact() {
  return <section id="contact" className="section contact-section"><div className="container contact-grid">
    <div className="contact-copy"><p className="eyebrow">LET’S MAKE YOUR SPACE SHINE</p><h2>Ready for a<br /><span>cleaner space?</span></h2><p>Tell us a little about what you need.<br />A fresh start begins with a conversation.</p><div className="contact-owner"><strong>{businessInfo.owner}</strong><span>{businessInfo.ownerTitle}</span></div><div className="contact-links">{businessInfo.phones.map((phone, index) => <a href={phone.href} key={phone.href}><Phone size={19} aria-hidden="true" />{phone.display}<span className="sr-only"> ({index === 0 ? 'primary' : 'secondary'} phone)</span></a>)}<a href={`mailto:${businessInfo.email}`}><Mail size={19} aria-hidden="true" />{businessInfo.email}</a></div></div>
    <div className="quote-options" aria-labelledby="quote-options-title">
      <h3 id="quote-options-title">Let’s talk about your clean.</h3>
      <p className="contact-help">Call Michael or email your cleaning needs for a free quote. A quote request does not confirm an appointment.</p>
      <a className="button" href={businessInfo.phones[0].href}><Phone size={18} aria-hidden="true" />Call for a Free Quote</a>
      <EmailContact href={quoteEmailUrl} label="Email a Quote Request" />
    </div>
  </div></section>
}
