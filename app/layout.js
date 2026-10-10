import "./globals.css";

export const metadata = {
  title: "Internet for Humanity | Connecting Communities in Uganda",
  description: "Help rural communities in Uganda access computer labs, reliable internet, and practical digital skills.",
};

export default function RootLayout({ children }) {
  return <html lang="en-CA"><body>{children}</body></html>;
}
