// PLACEHOLDER: Entire service list and descriptions await client confirmation.
export const services = [
  { icon: 'House', title: 'Residential Cleaning', description: 'A fresh, welcoming home without giving up your free time.', detail: 'More comfort. Less on your list.' },
  { icon: 'Building2', title: 'Commercial Cleaning', description: 'A well-kept space that makes the right first impression.', detail: 'Care for the places you do business.' },
  { icon: 'Sparkles', title: 'Deep Cleaning', description: 'Extra attention for the corners and details that need a little more care.', detail: 'A fresh start, from the details up.' },
  { icon: 'KeyRound', title: 'Move-In / Move-Out', description: 'Turn the page with a clean space, ready for its next chapter.', detail: 'One less thing to think about.' },
  { icon: 'BriefcaseBusiness', title: 'Office Cleaning', description: 'A tidy, refreshed workspace so your team can focus on the day ahead.', detail: 'A better environment for your work.' },
  { icon: 'CalendarDays', title: 'Recurring Cleaning', description: 'Keep that freshly cleaned feeling with a routine that fits your needs.', detail: 'Let a cleaner space become your routine.' },
].map(service => ({ ...service, placeholder: true }))
