// app/protected/page.js

import { getSession } from 'next-auth/react';

const ProtectedPage = async () => {
    const session = await getSession();
    console.log('Session:', session);

    if (!session) {
        return <div>Accès refusé</div>;
    }

    return (
        <div>
            <h1>Page protégée</h1>
            <p>Bienvenue, {session.user.name}</p>
        </div>
    );
};

export default ProtectedPage;
