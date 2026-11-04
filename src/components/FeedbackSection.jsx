import { MessageSquareHeart, ArrowUpRight } from 'lucide-react'
import { feedbackEmailUrl } from '../data/contactLinks'
import EmailContact from './EmailContact'

export default function FeedbackSection() {
  return <section id="feedback" className="container feedback-section"><div className="feedback-intro"><MessageSquareHeart size={30} aria-hidden="true" /><div><h2>Your experience matters.</h2><p>Prefer to contact us privately? Share your thoughts with us.</p></div></div>
    <details className="feedback-details"><summary>Send private feedback <ArrowUpRight size={18} aria-hidden="true" /></summary><div className="feedback-options">
      <p>Email your feedback directly to the business. Nothing is published on this website.</p>
      <EmailContact href={feedbackEmailUrl} label="Email Private Feedback" />
    </div></details>
  </section>
}
