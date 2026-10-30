// Add only verified, public HTTPS links supplied by the business.
// These are intentionally independent: a Google profile link is not a write-review link.
export const reviewLinks = {
  googleBusinessUrl: '',
  googleWriteReviewUrl: '',
  yelpBusinessUrl: '',
}

// Missing or malformed configuration must never create a fake or unsafe action.
export function externalReviewUrl(value) {
  try {
    const url = new URL(value.trim())
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : ''
  } catch {
    return ''
  }
}
