import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="max-w-2xl mx-auto p-4 flex justify-between">
                <div className="flex space-x-4">
                    <Link href="/" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-300">
                        About
                    </Link>
                    <Link href="/categories" className="hover:text-gray-300">
                        categories
                    </Link>
                </div>
            </nav>
        </header>
    );
}
