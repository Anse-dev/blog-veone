'use client'

import Link from 'next/link';
import { usePosts } from '../../hooks/usePosts';


export default function Home() {
    const { posts, loading, error } = usePosts();

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur lors du chargement des articles</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Articles</h2>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="p-4 border rounded shadow">
                        <Link href={`/posts/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                            {post.title}
                        </Link>
                        <p className="mt-2 text-gray-600">{post.body.slice(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
