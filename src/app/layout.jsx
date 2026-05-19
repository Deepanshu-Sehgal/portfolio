import "./globals.css";
import Navbar from "../components/NavBar";
import Contact from "../components/Contact";
import StarBackground from "../components/StarBackground";

export const metadata = {
  title: "Deepanshu Sehgal - Portfolio",
  description: "Full Stack Developer with strong DevOps capabilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-transparent text-white font-sans antialiased overflow-x-hidden">
        <StarBackground />
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Contact />
      </body>
    </html>
  );
}
