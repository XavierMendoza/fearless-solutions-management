# Local SEO foundation — Phase 2, Step 1

## Completed changes

- `index.html`: static title, description, canonical URL, indexing directives, Open Graph and Twitter/X metadata, and JSON-LD. These are present in the initial HTML response and do not depend on React rendering.
- `src/data/businessInfo.js`: confirmed service-area text and one natural local-services sentence in the hero introduction. The official motto remains the sole primary H1. Approved About copy, service cards, review URLs, contact details, images, and styles are unchanged.
- `public/fearless-logo.png`: byte-for-byte copy of the existing company logo at a stable public URL for sharing and structured data. No image was generated or redesigned.
- `public/sitemap.xml`: canonical homepage only. Section anchors are not separate pages. No invented last-modified dates or priority values.
- `public/robots.txt`: permits crawling and points to the sitemap.

The initial working tree was clean. Security hardening was already present in commit `2ad12e1`; `.gitignore`, `vercel.json`, `SECURITY_REVIEW.md`, and the footer security attributes were preserved.

## Target search terms

Cleaning services in Montclair, CA; residential cleaning in Montclair; commercial cleaning in Montclair; office cleaning in Montclair; industrial cleaning in Montclair. Surrounding communities are mentioned generically based on the client's request. No additional cities or service radius have been asserted.

## Metadata and business information

- Title: `Cleaning Services in Montclair, CA | Fearless Solutions Management`
- Description: `Fearless Solutions Management provides residential, commercial, office, and industrial cleaning in Montclair, CA and surrounding communities. Get a free quote.`
- Canonical and Open Graph URL: `https://www.fearlesssolutionsmanagement.com/`
- Robots: `index, follow, max-image-preview:large`, replacing the old preview-only `noindex, nofollow` directive.
- Social image: `https://www.fearlesssolutionsmanagement.com/fearless-logo.png` (864 × 900 PNG). Twitter uses the compact `summary` card suitable for the existing near-square logo. Social platforms may crop or cache their own previews; no unverified account handle is supplied.

JSON-LD uses Schema.org `LocalBusiness`, with the official name, motto, canonical website, primary public telephone `+13232157380`, logo, Montclair within California/United States as `areaServed`, and the approved Google business listing and Yelp listing in `sameAs`. The Google write-review action remains a website link and is not used as an identity URL.

The offer catalog contains the four client-confirmed services: residential, commercial, office, and industrial cleaning. Move-in/move-out and recurring services remain visible as before but are excluded from structured data because their source comments still request client confirmation.

No residential street address, precise coordinates, hours, prices, reviews, ratings, counts, or certifications are added. The service area does not claim to be a publicly accessible business address.

**Rich-result limitation:** Google lists a physical `address` as required for its LocalBusiness rich result. This address-free markup communicates truthful business/service information using Schema.org, but does not meet that Google eligibility requirement. Do not add a fake address or publish a private home address to satisfy a validator. Normal page indexing does not require LocalBusiness rich-result eligibility. See [Google LocalBusiness requirements](https://developers.google.com/search/docs/appearance/structured-data/local-business) and [Schema.org LocalBusiness](https://schema.org/LocalBusiness).

## Branded-search recognition

One `WebSite` JSON-LD entry identifies the official homepage with `name: Fearless Solutions Management`, the canonical `https://www.fearlesssolutionsmanagement.com/` URL, and `alternateName: fearlesssolutionsmanagement.com` as the domain-based fallback. Its `publisher` references the existing LocalBusiness `#business` identifier; the business entity is not duplicated. Both JSON-LD blocks are available in the initial HTML.

The full company name is consistent in the page title, Open Graph site name, and both structured-data entities. It is also readable homepage text in the company statement and About copy, in addition to the navigation/footer wordmark. The official motto remains the primary H1. No keyword list, hidden brand repetitions, or invented alternate business names were added.

This supports recognition for searches such as `Fearless Solutions Management`, `fearlesssolutionsmanagement`, `Fearless Solutions Management Montclair`, and `fearlesssolutionsmanagement.com`. It expresses the preferred site identity; Google decides the displayed site name and rankings. See [Google's site-name guidance](https://developers.google.com/search/docs/appearance/site-names). Site-name markup is separate from LocalBusiness rich-result eligibility and does not require adding the private address.

## Vite and security compatibility

Vite copies `public/` files unchanged into `dist/`. Metadata and JSON-LD are in `index.html`; no new dependencies or runtime SEO library are needed. The existing CSP only restricts `base-uri`, `object-src`, and `frame-ancestors`, and does not block the `application/ld+json` data block. No CSP relaxation was made.

The metadata and structured data are intentionally static. When business details change, update `businessInfo.js` or `reviewLinks.js` and the corresponding values in `index.html` together. If the logo is replaced, update the public copy and its metadata dimensions. Sitemap and robots URLs must also follow any future canonical-domain change.

## Google Search Console setup after approved deployment

1. Open [Google Search Console](https://search.google.com/search-console/) with the business owner's account. Reuse an existing verified property if one exists.
2. Otherwise add the Domain property `fearlesssolutionsmanagement.com`. Add Google's exact verification TXT value at the authoritative DNS provider, keeping existing DNS records intact. No verification token has been invented or added to this repository. Follow [Google's ownership-verification instructions](https://support.google.com/webmasters/answer/9008080).
3. After deployment, verify the homepage, `/robots.txt`, `/sitemap.xml`, and `/fearless-logo.png` return successfully on the canonical domain. Check that neither HTML nor deployment-level `X-Robots-Tag` headers apply `noindex` to production. Keep private preview deployments protected separately.
4. Submit `https://www.fearlesssolutionsmanagement.com/sitemap.xml` in Sitemaps.
5. Use URL Inspection's live test on the canonical homepage, check the rendered content and canonical, and request indexing. Monitor Page indexing and Performance over time; indexing and ranking are not guaranteed or immediate.
6. Use [Schema.org Validator](https://validator.schema.org/) for vocabulary validation and [Google Rich Results Test](https://search.google.com/test/rich-results) to inspect Google's eligibility report. The omitted private address is an intentional LocalBusiness eligibility limitation, not a field to fabricate.
7. For the branded-search update, use URL Inspection on the canonical homepage after deployment to confirm the fetched HTML includes exactly one `WebSite` and one `LocalBusiness` entry. Check the selected canonical and request indexing once for the updated page. Do not submit hash fragments as separate URLs or repeatedly request indexing.
8. Monitor Search Console Performance with query filters for the four branded searches above, allowing for recrawling and limited data on low-volume queries. The Rich Results Test is not a site-name acceptance test; use the Schema.org Validator for markup and URL Inspection for crawlability. No site-name display, indexing date, or ranking is guaranteed.

## Google Business Profile follow-up

Keep the business name, public phone, website, actual services, and service-area settings consistent with the site. Confirm the exact surrounding cities with the owner before naming them on the site or in structured data. If customers are not served at the owner's residence, keep that address hidden on the public profile and use the appropriate service-area setup. Add only accurate categories and hours supplied by the owner. Maintain genuine business photos and respond professionally to real reviews. The approved Google/Yelp links are unchanged; no Yelp review solicitation has been added.

## Verification and remaining limitations

Build, lint, static metadata/JSON parsing, sitemap XML, robots directives, social-image copy checks, and diff checks are performed locally. Browser verification covers the production build with existing security headers, the official motto, review-link attributes, heading hierarchy, image alt text, and responsive layouts. Public URLs for the newly added files become available only after deployment.

This remains a single-page client-rendered React site: metadata and structured data are server-delivered static HTML, while visible body content requires JavaScript. Google can render JavaScript, but rendering/indexing can take time and other crawlers may have limitations. No prerendering or redesign was introduced in this step. The contact/feedback forms remain preview-only and do not deliver messages; public phone/email are the contact routes. Security dependency-audit findings remain documented separately in `SECURITY_REVIEW.md`.

No Search Console, DNS, Business Profile, repository, or deployment account settings were changed. No commit, push, or deployment was performed as part of this SEO task.
