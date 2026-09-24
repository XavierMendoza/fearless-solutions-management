// PLACEHOLDER: Section marketing copy is for the client preview and needs approval.
import { gallery } from '../data/gallery'
export default function Gallery() {
  return <section id="work" className="section gallery-section"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">OUR WORK · THE POSSIBILITIES</p><h2>Clean spaces.<br /><span>Fresh perspectives.</span></h2></div><div><p>A little inspiration for your next fresh start.<br />Explore the spaces we look forward to caring for.</p><span className="quiet-label">Interior inspiration · a preview gallery</span></div></div>
    <div className="gallery-grid">{gallery.map(item => <figure className="gallery-item" key={item.label}><img src={item.src} alt={item.alt} loading="lazy" width="900" height="650" /><figcaption>{item.label}</figcaption></figure>)}</div>
  </div></section>
}
