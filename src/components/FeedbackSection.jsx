// PLACEHOLDER: Section marketing copy is for the client preview and needs approval.
import { useState } from 'react'
import { MessageSquareHeart, ArrowUpRight } from 'lucide-react'
import { previewSubmit } from '../utils/previewSubmit'
export default function FeedbackSection() {
  const [status, setStatus] = useState('')
  return <section id="feedback" className="container feedback-section"><div className="feedback-intro"><MessageSquareHeart size={30} /><div><h2>Your experience matters.</h2><p>Prefer to contact us privately? Share your thoughts with us.</p></div></div>
    <details className="feedback-details"><summary>Send private feedback <ArrowUpRight size={18} /></summary><form className="feedback-form" onSubmit={event => previewSubmit(event, setStatus)}>
      <p className="form-notice">Preview form — messages are not sent yet.</p><div className="form-grid">
        <label>Name<input name="name" autoComplete="name" required /></label><label>Email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Phone <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" /></label><label>Rating<select name="rating" defaultValue="" required><option value="" disabled>Select a rating</option>{[5,4,3,2,1].map(rating => <option key={rating} value={rating}>{rating} {rating === 1 ? 'star' : 'stars'}</option>)}</select></label>
      </div><label>Message<textarea name="message" rows="4" required /></label><button className="button" type="submit">Send Feedback<ArrowUpRight size={17} /></button><p className="form-status" role="status">{status}</p>
    </form></details>
  </section>
}
