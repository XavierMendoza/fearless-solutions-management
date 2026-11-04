import { businessInfo } from './businessInfo'

function emailDraft(subject, lines) {
  return `mailto:${businessInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\r\n'))}`
}

export const quoteEmailUrl = emailDraft(`Quote Request - ${businessInfo.name}`, [
  'Hello Fearless Solutions Management,', '',
  'I would like a free cleaning quote.', '',
  'Name:', 'Phone (optional):', 'Type of cleaning:', 'City / service area:',
  'About your space:', 'Preferred timing:', '', 'Thank you!',
])

export const feedbackEmailUrl = emailDraft(`Private Customer Feedback - ${businessInfo.name}`, [
  'Hello Fearless Solutions Management,', '',
  'I would like to share private feedback about my experience.', '',
  'Name (optional):', 'Feedback:', '', 'Thank you!',
])
