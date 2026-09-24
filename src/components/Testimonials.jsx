// PLACEHOLDER: Section marketing copy is for the client preview and needs approval.
import { Star, Quote, ArrowUpRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { businessInfo } from '../data/businessInfo'
export default function Testimonials() {
  return <section id="reviews" className="section container">
    <div className="center-heading"><p className="eyebrow">GOOD CARE LEAVES AN IMPRESSION</p><h2>A clean you can feel good about.</h2><p>Personal attention. Thoughtful details. More room to enjoy your day.</p><span className="quiet-label">Sample experiences for this preview</span></div>
    <div className="reviews-grid">{testimonials.map(review => <article className="review-card" key={review.name}>
      <div className="review-top"><span className="stars" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={15} fill="currentColor" aria-hidden="true" />)}</span><Quote size={26} aria-hidden="true" /></div>
      <blockquote>“{review.quote}”</blockquote><div className="review-person"><span className="avatar">{review.name.charAt(0)}</span><div><strong>{review.name}</strong><span>{review.service}</span></div></div>
    </article>)}</div>
    <div className="review-invite"><div><strong>Had a great experience?</strong><p>We’d love to hear about it.</p></div><div>{businessInfo.googleReviewUrl ? <a className="button button-outline" href={businessInfo.googleReviewUrl} target="_blank" rel="noreferrer">Leave a Google Review<ArrowUpRight size={17} /></a> : <><button className="button button-outline" disabled>Leave a Google Review<ArrowUpRight size={17} /></button><span className="availability">Review link coming soon</span></>}</div></div>
  </section>
}
