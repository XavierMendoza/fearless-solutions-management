// PLACEHOLDER: Section marketing copy is for the client preview and needs approval.
import { ArrowUpRight, Phone, Sparkles, ArrowDown } from 'lucide-react'
import { businessInfo, companyCopy } from '../data/businessInfo'
import { heroImage } from '../data/gallery'

export default function Hero() {
  return <section id="home" className="hero">
    <div className="hero-picture"><img src={heroImage.src} alt={heroImage.alt} fetchPriority="high" /><span className="photo-caption">A little inspiration for a fresher space</span></div>
    <div className="container hero-inner">
      <div className="hero-copy">
        <p className="eyebrow"><span /> A FRESH START BEGINS HERE</p>
        <h1>{companyCopy.hero[0]}<br /><span>{companyCopy.hero[1]}</span></h1>
        <p className="hero-description">{companyCopy.introduction}</p>
        <div className="button-row"><a className="button" href="#contact">{businessInfo.cta.quote}<ArrowUpRight size={19} /></a><a className="button button-outline" href={businessInfo.phones[0].href}><Phone size={17} />{businessInfo.cta.call}</a></div>
        <div className="hero-signoff"><p>{businessInfo.tagline}</p></div>
      </div>
      <div className="hero-note"><span className="note-icon"><Sparkles /></span><div><strong>A fresh space. A better day.</strong><span>Thoughtful care, down to the details.</span></div></div>
    </div>
    <a className="hero-explore" href="#services"><ArrowDown size={15} /> DISCOVER THE FEARLESS DIFFERENCE</a>
  </section>
}
