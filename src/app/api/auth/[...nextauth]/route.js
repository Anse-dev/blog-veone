// app/api/auth/[...nextauth]/route.js

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import users from '@/data/users'

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "alice@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log('Authorize function called with credentials:', credentials);
                const user = users.find(user =>
                    user.email === credentials.email && user.password === credentials.password
                );

                if (user) {
                    console.log('User found:', user);
                    return { id: user.id, name: user.name, email: user.email };
                } else {
                    console.log('No user found');
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.PUBLIC_NEXT_JWT_SECRET, // Assurez-vous d'avoir défini une clé secrète JWT
    },
    pages: {
        signIn: '/auth/signin',
    },
    debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
