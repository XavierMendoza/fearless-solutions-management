# Security hardening review — 2026-11-03

## Scope and changes

This is a static React/Vite site. No backend, authentication, dependency changes, or account-level changes were introduced. The changes are local until approved and deployed.

There was no existing Vercel configuration file in this checkout. `vercel.json` adds response headers to every path using Vercel's [static header configuration](https://vercel.com/docs/project-configuration/vercel-json#headers):

| Header | Protection |
| --- | --- |
| `X-Content-Type-Options: nosniff` | Prevents MIME-type sniffing. |
| `X-Frame-Options: DENY` | Blocks framing in browsers that use this legacy fallback. |
| `Content-Security-Policy: base-uri 'self'; object-src 'none'; frame-ancestors 'none'` | Prevents foreign base URLs, object/plugin embeds, and framing. |
| `Referrer-Policy: strict-origin-when-cross-origin` | Limits cross-origin referrer details and omits referrers on HTTPS-to-HTTP navigation. |
| `Permissions-Policy: camera=(), microphone=(), geolocation=()` | Disables browser capabilities the site does not use. |

The CSP intentionally does not restrict scripts, styles, images, connections, or form destinations. It is a limited defense, not a comprehensive XSS policy. The source has no base elements, object/plugin embeds, or intentional framing. The built site was tested locally with the exact proposed headers; navigation, image loading, and the existing preview-form handler remained functional. Future embeds, integrations, and any stricter resource policy need another compatibility review. See [MDN's CSP documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy).

All current external new-tab links have `noopener noreferrer`; the social-link renderer in the footer now explicitly includes both. Review URLs were preserved. `.gitignore` now covers `.env`, `.env.*` (except a deliberately shareable `.env.example`), and `.vercel` project metadata. Example files must contain placeholders only. Ignore rules do not protect values bundled into frontend code: never place secrets in `VITE_*` variables.

## Live transport baseline

Read-only requests to the public site confirmed:

- HTTP on both domain variants returns a Vercel `308` redirect to HTTPS.
- `https://fearlesssolutionsmanagement.com/` returns `308` to `https://www.fearlesssolutionsmanagement.com/`.
- The HTTPS `www` page returns `200` and `Strict-Transport-Security: max-age=63072000`.

No redirect or HSTS rule was added, avoiding duplication of the working Vercel configuration. The proposed new headers are not live yet. Verify their actual responses after an approved deployment; a local preview cannot validate Vercel routing precedence or dashboard overrides.

## Source and build review

- No `dangerouslySetInnerHTML`, direct HTML assignment, `eval`, or `new Function` in application source.
- No credential-pattern matches in the scanned tracked text files, or tracked environment/private-key files. This is a targeted current-tree check, not a full Git-history or credential-provider audit.
- Public names, phone numbers, email, and Google/Yelp URLs are intentional business contact data.
- The production build contains no source maps or environment files.
- Contact and private-feedback forms remain explicitly preview-only; their handler prevents default submission and does not store or transmit data. Phone and email remain the working contact routes.

## Dependency audit

`npm audit --json` reported **9 affected packages: 3 high and 6 moderate, 0 critical**. `npm audit --omit=dev --json` reported **0 vulnerabilities**. All findings are development/build tooling, not installed production dependencies; they still warrant maintenance, especially on developer machines and CI. These counts reflect affected packages, including inherited findings, rather than nine independent root vulnerabilities.

| Affected package(s) | Severity | Finding / follow-up |
| --- | --- | --- |
| `vite` 8.3.0 | High | Development-server/editor and filesystem advisories. npm reports a fix available. Review a compatible patch update separately; keep development servers on loopback. |
| `source-map-js` 1.2.1 via Vite/PostCSS | High | Indexed-source-map denial of service ([advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)); npm reports a fix available. |
| `zod` 4.6.5 via React Hooks lint tooling | High | Oversized constrained-collection validation can exhaust memory ([advisory](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5)); npm reports a fix available. |
| `minimatch` 10.2.6; `eslint`, `@eslint/config-array`, `@eslint-community/eslint-utils`, `@eslint/js`, `eslint-plugin-react-refresh` | Moderate | Glob amplification denial of service ([advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249)) and inherited dependency findings. npm reports no complete automatic fix; its suggested `@eslint/js` change crosses a major version. Review the lint toolchain together. |

No `npm audit fix`, overrides, or dependency changes were applied. Re-run both audits during a separately reviewed maintenance update.

## Account-level follow-up

These settings cannot be established from repository code or public responses. The account owner should verify them in Vercel, the Git host, and the domain registrar:

- Enable MFA/passkeys and recovery methods; remove unused collaborators and access tokens, and limit production access to the people who need it.
- Review repository branch protections, dependency/security alerts, and deployment access. Protect nonpublic preview deployments using settings available on the current plan.
- Keep domain auto-renewal and registrar account security configured. HTTPS and the canonical-domain redirect already work; no new domain rule is needed.
- After approval and deployment, check the five headers on the production document and a static asset, including redirected paths, and recheck the browser console. Account-level routing may take precedence over the repository configuration.

## Verification

`npm run build`, `npm run lint`, configuration checks, and `git diff --check` passed. The built site was served on loopback with the header values read directly from `vercel.json` for browser compatibility checks. No production deployment was performed.
