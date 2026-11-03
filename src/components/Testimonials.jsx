import { ArrowUpRight } from 'lucide-react'
import { reviewLinks, externalReviewUrl } from '../data/reviewLinks'

const platforms = [
  {
    id: 'google',
    name: 'Google',
    description: 'Read what customers share about our cleaning services on Google. Have an experience to share? We welcome your feedback.',
    actions: [
      { label: 'Read Google Reviews', key: 'googleBusinessUrl' },
      { label: 'Leave a Google Review', key: 'googleWriteReviewUrl', secondary: true },
    ],
  },
  {
    id: 'yelp',
    name: 'Yelp',
    description: 'Get to know Fearless Solutions Management on Yelp and read about customer experiences with our cleaning services.',
    // Yelp is for discovery only. Do not add a request to write a Yelp review.
    actions: [{ label: 'View Yelp Reviews', key: 'yelpBusinessUrl' }],
  },
]

function PlatformWordmark({ platform }) {
  // Text branding stays local; no third-party scripts, fonts, or image requests.
  return platform === 'google'
    ? <span className="platform-wordmark google-wordmark" aria-hidden="true">
      <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
    </span>
    : <span className="platform-wordmark yelp-wordmark" aria-hidden="true">yelp</span>
}

export default function Testimonials() {
  return <section id="reviews" className="section container" aria-labelledby="reviews-title">
    <div className="center-heading">
      <p className="eyebrow">GOOD CARE LEAVES AN IMPRESSION</p>
      <h2 id="reviews-title">A clean you can feel good about.</h2>
      <p>Find customer perspectives on the platforms you know.</p>
    </div>
    <div className="reviews-grid">
      {platforms.map(platform => {
        const actions = platform.actions.map(action => ({ ...action, url: externalReviewUrl(reviewLinks[action.key]) }))
        const available = actions.filter(action => action.url)
        return <article className="review-card" key={platform.id} aria-labelledby={`${platform.id}-reviews-title`}>
          <div className="review-platform-heading">
            <PlatformWordmark platform={platform.id} />
            <h3 id={`${platform.id}-reviews-title`}>{platform.name} Reviews</h3>
          </div>
          <p className="review-description">{platform.description}</p>
          <div className="review-actions">
            {available.map(action => <a key={action.key} className={`button${action.secondary ? ' button-outline' : ''}`} href={action.url} target="_blank" rel="noopener noreferrer">
              {action.label}<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
            </a>)}
            {available.length === 0
              ? <p className="review-link-pending">Profile link coming soon</p>
              : actions.filter(action => !action.url).map(action => <p className="review-link-pending" key={action.key}>{action.label}: Profile link coming soon</p>)}
          </div>
        </article>
      })}
    </div>
  </section>
}
