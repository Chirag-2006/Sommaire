import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Sommaire
          </Link>
        </div>

        {/* Middle - Nav Links */}
        <nav className=" flex items-center gap-6">
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-600 hover:text-black transition"
          >
            Pricing
          </Link>
        </nav>

        {/* Right - Auth */}
        <div className="flex items-center">
          <Link
            href="/sign-in"
            className="px-4 py-2 text-sm font-medium rounded-md border hover:bg-gray-100 transition"
          >
            Sign In
          </Link>
        </div>

      </div>
    </header>
  );
}