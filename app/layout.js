import "./globals.css";
import "./header-overrides.css";
import "./content-fixes.css";
import "./about-design.css";
import "./blog-design.css";
import "./donate-design.css";
import "./giving-detail.css";
import "./review-updates.css";

export const metadata = {
  metadataBase: new URL("https://christshandsskill.org"),
  title: { default: "Christ’s Hands Centre", template: "%s | Christ’s Hands Centre" },
  description: "To empower vulnerable women, single mothers, and youth in Uganda through vocational skills training, education, nutrition, childcare, and psychosocial support, enabling families to achieve self-reliance and long-term stability.",
};

export default function RootLayout({ children }) {
  return <html lang="en-CA"><body>{children}</body></html>;
}
