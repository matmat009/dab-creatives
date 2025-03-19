import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="mx-auto flex px-6 justify-center gap-4">
        <h1 className="text-xl font-bold text-black-600">Dab Creatives</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
