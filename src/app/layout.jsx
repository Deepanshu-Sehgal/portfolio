import "./globals.css";
import Navbar from "../components/NavBar";
import Contact from "../components/Contact";
import StarBackground from "../components/StarBackground";
import CustomCursor from "../components/CustomCursor";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Deepanshu Sehgal - Portfolio",
  description: "Full Stack Developer with strong DevOps capabilities.",
  openGraph: {
    title: "Deepanshu Sehgal - Portfolio",
    description: "Full Stack Developer with strong DevOps capabilities.",
    url: "https://yourdomain.com",
    siteName: "Deepanshu Sehgal Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // GEO Optimization (Replace with your actual location details)
    "geo.region": "IN", // e.g., IN for India, US for United States
    "geo.placename": "Your City", // e.g., New Delhi
    "geo.position": "28.6139;77.2090", // Latitude;Longitude
    "ICBM": "28.6139, 77.2090",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-transparent text-white font-sans antialiased overflow-x-hidden">
        <CustomCursor />
        <StarBackground />
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Contact />
      </body>
    </html>
  );
}
