// Add only verified, public HTTPS links supplied by the business.
// These are intentionally independent: a Google profile link is not a write-review link.
export const reviewLinks = {
  googleBusinessUrl: 'https://www.google.com/maps/place/Fearless+Solutions+Management/@34.0551305,-117.615091,11z/data=!3m1!4b1!4m6!3m5!1s0x47ed989e5ef57637:0x5da604cd72afb91e!8m2!3d34.0551305!4d-117.615091!16s%2Fg%2F11p2dpndy9',
  googleWriteReviewUrl: 'https://g.page/r/CR65r3LNBKZdECE/review',
  yelpBusinessUrl: 'https://www.yelp.com/biz/fearless-solutions-management-montclair',
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
