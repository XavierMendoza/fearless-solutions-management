# Fearless Solutions Management — client preview

Run `npm run dev` to preview, `npm run build` to produce the static frontend,
and `npm run lint` to check source code. The live site is hosted on Vercel. This repository remains frontend-only.

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
- `src/components/Testimonials.jsx` now shows Google and Yelp platform cards with
  honest empty preview areas, plus a reserved Website reviews area. Fictional
  testimonials have been removed. No ratings, counts, widgets, or APIs are used.

## External review links (Phase 1)

Add verified HTTPS URLs to `src/data/reviewLinks.js`:

- `googleBusinessUrl`: public Google Business Profile / read-reviews destination.
- `googleWriteReviewUrl`: the separate Google write-review destination.
- `yelpBusinessUrl`: public Yelp business profile, once approved and verified.

All three start empty. Each action checks its own URL. Missing or invalid URLs
show “Profile link coming soon” rather than a link. Valid links open a new tab
with `rel="noopener noreferrer"`. The optional footer Google link uses the same
`googleBusinessUrl`. Do not put review URLs in `businessInfo.js`.

Yelp offers only “View Reviews on Yelp”; never solicit Yelp reviews. See
[Yelp guidance](https://www.yelp-support.com/article/Don-t-Ask-for-Reviews?l=en_GB).
Genuine previews can be added later using approved content or official embeds.
The separate website review system will later use Django/DRF and PostgreSQL on
Railway; this phase adds no submission form, storage, or backend for it.

## Forms and future launch

Both forms use native browser validation. Their shared submit handler in
`src/utils/previewSubmit.js` only displays a demo notice. Nothing is sent or saved.
Only report delivery after an approved provider confirms receipt in a later pass.
Review URLs, social URLs, and service area remain empty. The existing private
feedback and quote forms are unchanged demos, separate from future public reviews.

The preview retains `noindex, nofollow`. Remove that only when approved for launch.
Final sharing URL/image metadata remains pending. No address, hours, credentials,
pricing, or company history have been invented.

## Browser review

Review the actual logo at navigation size, image crops, expanded About copy, and
mobile call/quote bar with Michael. Test telephone/email links on a real phone
(they depend on installed apps), keyboard navigation, form validation, and mobile
Safari/Chrome before launch. Original stock files are large; image optimization
can be considered before launch without changing the approved selections.
