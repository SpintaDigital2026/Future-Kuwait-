export const featuredCaseStudy = {
  id: "featured-uk-retail-dynamics",
  slug: "uk-retail-dynamics-365",
  title: "A UK retailer brought finance and stock onto one platform",
  client_name: "UK retail group",
  summary:
    "FCC replaced disconnected finance and inventory tools with Dynamics 365 and Azure, so store and finance teams could see stock, margin, and performance in one place.",
  body_html: `
    <h2>The challenge</h2>
    <p>The retailer ran finance, purchasing, and store stock in separate systems. Month-end took too long, buyers could not trust stock figures, and leadership had no single view of margin across stores.</p>
    <p>Spreadsheets filled the gaps. That worked for a smaller estate, but it broke down as the group added sites and wanted clearer reporting without hiring a larger back-office team.</p>
    <h2>What FCC delivered</h2>
    <p>FCC ran a short discovery, mapped the processes that actually mattered, and stood up a Dynamics 365 environment on Azure. The first release covered finance, purchasing, and core inventory. Store teams kept working while data was cleaned and moved across.</p>
    <ul>
      <li>Dynamics 365 for finance, purchasing, and inventory</li>
      <li>Azure hosting with a clear operating model for the IT team</li>
      <li>Reporting that shows stock, margin, and store performance together</li>
      <li>Training for finance, buying, and store managers before go-live</li>
    </ul>
    <h2>The outcome</h2>
    <p>Month-end close is faster because the numbers no longer have to be rebuilt in spreadsheets. Buyers work from the same stock position as the stores, and leadership reviews performance from one set of reports.</p>
    <p>The group now has a platform it can extend, rather than another system to reconcile.</p>
  `,
  cover_url: null as string | null,
  cover_image_alt: "Retail operations team reviewing performance in a modern workspace",
  tags: ["Dynamics 365", "Azure", "Retail"],
  industry: "Retail",
  results: [
    { value: "Faster close", label: "Month-end without spreadsheet rebuilds" },
    { value: "One view", label: "Stock, margin, and store performance" },
    { value: "12 weeks", label: "From discovery to first go-live" },
  ],
  meta_title: "UK retail Dynamics 365 case study — FCC",
  meta_description:
    "How FCC helped a UK retail group replace disconnected finance and inventory systems with Dynamics 365 and Azure.",
  status: "published" as const,
};
