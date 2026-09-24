# Fearless Solutions Management — client preview

Run `npm run dev` to preview, `npm run build` to produce the static frontend,
and `npm run lint` to check source code. No backend or deployment is configured.

## Editing content

- `src/data/businessInfo.js`: confirmed business contacts, CTA labels, optional links,
  and draft company copy. Empty optional links are deliberately not rendered.
- `src/data/services.js`: six proposed services, pending owner approval.
- `src/data/gallery.js`: remote Unsplash interior inspiration, not actual client jobs.
- `src/data/testimonials.js`: three fictional samples. Replace with genuine approved
  reviews before public launch. The page identifies these as preview experiences.
- Section-level marketing headings are in the corresponding components and marked
  with placeholder comments. The sparkle wordmark is a proposed brand treatment,
  not a reproduction of the owner's original logo.

## Forms and future launch

Both forms use native browser validation. Their shared submit handler in
`src/utils/previewSubmit.js` only displays a demo notice. Nothing is sent or saved.
Connect the handler to an approved form provider before launch; only show delivery
success after the provider confirms receipt. The Google review button stays disabled
until `googleReviewUrl` is configured. Set social links as `{ label, url }` entries.

The preview includes `noindex, nofollow`. Remove that only when approved for launch.
Add final sharing metadata and replace stock images, fictional testimonials, and
unconfirmed service/marketing copy. No address, hours, service area, credentials,
pricing, or company history have been invented.

## Browser review

Review the proposed wordmark, colors, imagery, copy, and mobile call/quote bar with
Michael. Test telephone/email links on a real phone (they depend on installed apps),
keyboard navigation, form validation, and mobile Safari/Chrome before launch.
