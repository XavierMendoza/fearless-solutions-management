// Stock inspiration only; this section is not a portfolio of company jobs.
import { gallery } from '../data/gallery'
export default function Gallery() {
  return <section id="gallery" className="section gallery-section"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">THE POSSIBILITIES</p><h2>Clean spaces.<br /><span>Fresh perspectives.</span></h2></div></div>
    <div className="gallery-grid">{gallery.map(item => <figure className="gallery-item" key={item.label}><img src={item.src} alt={item.alt} loading="lazy" width="900" height="650" /><figcaption>{item.label}</figcaption></figure>)}</div>
  </div></section>
}
