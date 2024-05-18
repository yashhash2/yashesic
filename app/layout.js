import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Blogger",
  description: "My amazing recipe app",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href={'/'}>
        <h1 className="header">The Blogger</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
  <p>© 2024 The Blogger. Crafted with passion and love for delightful recipes.</p>
      <p>
        Follow us on 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, and 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
      </p>    </footer>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
