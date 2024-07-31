'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

function LinkActive({ url, content }) {
    const pathname = usePathname()
    return (
        <Link href={url} className={`hover:text-gray-300 ${pathname === url ? 'text-orange-700' : ''}`}>
            {content}
        </Link>
    )
}

export default LinkActive;