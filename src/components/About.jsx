import { ArrowUpRight } from 'lucide-react'
import { businessInfo, companyCopy } from '../data/businessInfo'

export default function About() {
  return <section id="about" className="about-section"><div className="container about-grid">
    <div className="about-statement">
      {/* Supporting marketing heading retained from the client preview. */}
      <p className="eyebrow">THE FEARLESS DIFFERENCE</p>
      <h2>More than a clean.<br />A little more<br /><span>peace of mind.</span></h2>
      <div className="about-seal"><span>{businessInfo.tagline}</span></div>
    </div>
    <div className="about-copy">
      {companyCopy.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <div className="mission"><h3>Our mission</h3><p>{companyCopy.mission}</p></div>
      <div className="owner-line"><div><strong>{businessInfo.owner}</strong><span>{businessInfo.ownerTitle} · {businessInfo.name}</span></div><a href="#contact" aria-label="Contact Michael"><ArrowUpRight /></a></div>
    </div>
  </div></section>
}
