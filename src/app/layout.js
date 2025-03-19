import "./globals.css"; // ✅ Correct import path
import Nav from "../components/nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>DAB Creatives</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
