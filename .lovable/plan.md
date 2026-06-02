I found the source of the huge empty area: the shared `.hero-grid` CSS still forces `min-height: 100vh` on desktop, overriding the earlier policy-page padding reduction.

Plan:
1. Update `PageHero` so pages without an image use a compact policy-style hero layout instead of the full-screen hero grid.
2. Keep image-based pages using the current large split hero behavior.
3. Tighten policy page content spacing so the divider and body text sit directly below the compact header.
4. Check the cookie, privacy, and terms policy routes at the current desktop viewport to confirm the empty space is gone.