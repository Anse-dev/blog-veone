'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import LinkActive from '../LinkActive'

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();

    function gotTo(url) {
        router.push(url)
    }
    return (
        <header className="bg-gray-800 text-white">
            <nav className="max-w-2xl mx-auto p-4 flex justify-between">
                <div className="flex space-x-4">
                    <LinkActive url={'/'} content={'home'} />
                    <LinkActive url={'/about'} content={'about'} />

                    <LinkActive url={'/categories'} content={'categories'} />

                    <div onClick={() => gotTo('/')}>home recharger</div>
                </div>
            </nav>
        </header>
    );
}



