// SAMPLE / PLACEHOLDER: Fictional preview testimonials, not verified customers.
// Replace with approved, genuine customer reviews before public launch.
export const testimonials = [
  { name: 'Sarah M.', rating: 5, service: 'Residential Cleaning', quote: 'Coming home to a fresh, clean space made such a difference. It was the little details that really stood out.' },
  { name: 'David R.', rating: 5, service: 'Office Cleaning', quote: 'Friendly communication and thoughtful attention to our workspace. Everything felt refreshed and ready for the week.' },
  { name: 'Jessica L.', rating: 5, service: 'Move-Out Cleaning', quote: 'Moving is a lot to manage. Having the cleaning taken care of made the whole process feel so much easier.' },
].map(review => ({ ...review, placeholder: true }))
