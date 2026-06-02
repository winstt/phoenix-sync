## Goal
Reduce the large empty gap between the page header and body text on the three policy pages (Privacy, Cookie, Terms), and add a subtle separator line between hero and content.

## Changes

### 1. `src/components/PageHero.tsx`
- When no `imageUrl` is provided (policy pages), drop the `minHeight: 52vh` so the hero sizes naturally to its content.
- Reduce bottom padding from `4rem` → `2rem` in the no-image case.
- Keep current sizing intact for pages that pass an `imageUrl` (no visual change there).

### 2. `src/pages/PrivacyPolicyPage.tsx`, `CookiePolicyPage.tsx`, `TermsPage.tsx`
- Reduce the content `<section>` padding from `4rem 2.5rem` → `2.5rem 2.5rem` (top trimmed).
- Add a subtle 1px divider at the top of the content section using `borderTop: '1px solid rgba(245,240,235,0.08)'` and matching the hero's left padding (`2.5rem`) via a thin inner `<hr>` or container border, so it reads as a hairline separator under the heading block.

## Result
Header block sits naturally above a hairline divider, with the body text starting much closer below — matches the tightened spacing the user requested.
