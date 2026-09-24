// PLACEHOLDER: Section marketing copy is for the client preview and needs approval.
import { Check, ArrowUpRight, Sparkles } from 'lucide-react'
import { businessInfo, companyCopy } from '../data/businessInfo'
export default function About() {
  return <section id="about" className="about-section"><div className="container about-grid">
    <div className="about-statement"><p className="eyebrow">THE FEARLESS DIFFERENCE</p><h2>More than a clean.<br />A little more<br /><span>peace of mind.</span></h2><div className="about-seal"><Sparkles size={32} /><span>{businessInfo.tagline}</span></div></div>
    <div className="about-copy"><p>{companyCopy.about}</p><div className="values">{companyCopy.values.map(([title, description]) => <div key={title}><Check size={18} /><div><h3>{title}</h3><p>{description}</p></div></div>)}</div><div className="owner-line"><div><strong>{businessInfo.owner}</strong><span>{businessInfo.ownerTitle} · {businessInfo.name}</span></div><a href="#contact" aria-label="Contact Michael"><ArrowUpRight /></a></div></div>
  </div></section>
}
