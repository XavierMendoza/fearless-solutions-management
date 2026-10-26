# Fearless Solutions Management — client preview

Run `npm run dev` to preview, `npm run build` to produce the static frontend,
and `npm run lint` to check source code. No backend or deployment is configured.

## Branding and content

- `src/assets/brand/fearless-logo.png` is the official client artwork, used in the
  navbar, footer, and favicon. The company name remains HTML alongside the badge.
- `references/fearless-brand-reference.png` is an internal business-card reference;
  it is not imported into the public website.
- `src/data/businessInfo.js` contains confirmed contacts, the exact official motto,
  client-approved company statement, two About paragraphs, and mission statement.
  The motto appears as HTML in the hero, About, and footer.
- `src/data/services.js` includes residential, commercial, industrial facility,
  and office/workspace cleaning. Move-In / Move-Out and Recurring Cleaning remain
  marked as placeholders requiring client confirmation. Service descriptions and
  other supporting marketing copy remain drafts.
- `src/data/gallery.js` imports the seven supplied local Pexels assets. These are
  stock inspiration, not a portfolio of completed company jobs. Credits and usage
  notes are in `PHOTO_SOURCES.md`, which is not part of the public build.
- `src/data/testimonials.js` contains three fictional samples. The page explicitly
  labels these as fictional and unverified. Replace them with genuine approved
  reviews before public launch.

## Forms and future launch

Both forms use native browser validation. Their shared submit handler in
`src/utils/previewSubmit.js` only displays a demo notice. Nothing is sent or saved.
Only report delivery after an approved provider confirms receipt in a later pass.
The Google review button stays disabled until a real URL is supplied. Yelp,
social URLs, and service area remain empty; no integrations were added.

The preview retains `noindex, nofollow`. Remove that only when approved for launch.
Final sharing URL/image metadata remains pending. No address, hours, credentials,
pricing, or company history have been invented.

## Browser review

Review the actual logo at navigation size, image crops, expanded About copy, and
mobile call/quote bar with Michael. Test telephone/email links on a real phone
(they depend on installed apps), keyboard navigation, form validation, and mobile
Safari/Chrome before launch. Original stock files are large; image optimization
can be considered before launch without changing the approved selections.
