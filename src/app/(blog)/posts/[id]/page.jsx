'use client'
import { useRouter } from 'next/router';
import { usePost } from '../../../../hooks/usePost';
import Link from 'next/link';

export default function PostPage({ params }) {

    const { id } = params
    const { post, loading, error } = usePost(id);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur lors du chargement de l'article</div>;
    }

    if (!post) {
        return <div>Aucun article trouvé.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-3xl font-bold">{post.title}</h2>
            <p className="mt-4 text-gray-700">{post.body}</p>
            <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
                Retour à la liste des articles
            </Link>
        </div>
    );
}






