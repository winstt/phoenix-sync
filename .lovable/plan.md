# Fix Netlify contact form detection

## Changes
- Correct the static contact-form blueprint in the source HTML with `name="contact"`, `method="POST"`, `data-netlify="true"`, the honeypot declaration and matching `name`, `email`, `org`, and `message` controls.
- Keep the visible form and its appearance unchanged while confirming its hidden `form-name=contact` field and URL-encoded AJAX submission remain aligned with the blueprint.

## Verification
- Run the production build and inspect `dist/index.html` directly to confirm Netlify receives the complete static blueprint at deploy time.
- Confirm the generated page still builds successfully and the Mailchimp form is untouched.
