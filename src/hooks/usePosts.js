import { useEffect, useState } from 'react';
import axios from 'axios';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                    setPosts(response.data);
                }, 3000)

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};
