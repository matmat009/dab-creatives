import "./globals.css"; // ✅ Correct import path
import Nav from "../components/nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Nav />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
