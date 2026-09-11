# Approved V2 home page and site image refresh

## Outcome
- Make the approved dark-purple V2 design from the supplied PDF the main home page at `/`.
- Keep `/v2` available with the same approved home-page treatment so the existing review link does not break.
- Replace the current stock imagery across the website with the supplied, correctly named images.

## Home page
- Replace the current royal-blue V2 colour overrides with the approved PDF palette: deep purple/near-black page surfaces, vivid purple accents, soft purple section bands, white primary text, and muted lavender secondary text.
- Match the PDF’s contrast treatment across the navigation, opening banner, trust strip, content sections, cards, buttons, brochure panel, closing contact area, and footer.
- Preserve the current wording, section order, animations, CTA spacing, and consistent button sizing unless a small contrast adjustment is required.
- Use the supplied home imagery for the opening banner and closing contact area, and use the named Microsoft, Cyber Security, Customer Experience, AI, and Solutions Brochure images in their corresponding sections.

## Image replacement across the website
- Upload the supplied JPG files to the project’s managed asset storage and reference their generated asset links rather than adding the large binary files to the codebase.
- Replace exact product/service matches on their corresponding pages:
  - Customer journey / View360, Xebo, Cyber Security overview, ThreatDown, Barracuda, FireCompass, Microsoft Security/resilience, Dune Dynamics, Provakil, Microsoft overview, Dynamics 365 products, Power BI, Power Apps, and Azure.
- Use the named general images for the relevant home, contact, footer, Microsoft partner, AI responsibility, and solution-brochure areas.
- Add the Blogs, White Papers, Events/Webinars, and Glossary images as page-level banners or fallback artwork while preserving any cover image uploaded by an administrator for an individual resource.
- Where two numbered alternatives are supplied, use both only where the page has distinct suitable placements; otherwise choose the image that best fits the existing crop and retain the second as an available managed asset.
- Keep the current Future logos unchanged because the supplied archive contains content imagery rather than replacement logo files.

## Quality checks
- Verify the main home page and representative product/resource pages at desktop and mobile widths.
- Check image crops, loading, legibility, menu contrast, CTA contrast, and that no content overlaps or leaves the viewport.
- Confirm all routes still load, all metadata remains valid, and the final project check is clean.

## Technical details
- Convert the approved V2 palette into semantic home-theme tokens instead of scattered colour values.
- Update static route imports to `.asset.json` pointers and keep CMS-provided resource cover URLs as the first-choice image source.
- Do not alter CMS data, authentication, page copy, or navigation structure as part of this refresh.
