import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { SessionOptions } from 'next-auth';
import { DefaultSession } from 'next-auth';
import { User as UserType } from "next-auth";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


interface ExtendedSession extends DefaultSession {
    id: string;
    provider: string;
}

interface CustomUser {
    email: string;
    password: string;
    username: string;
    role?: string; // Add the role property
    // Add any other properties from your User model
}

export const authOptions: NextAuthOptions = {

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/internal/e2dc6cbc80e73397/auth",
    },

    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "example@gmail.com",
                },
                password: {
                    label: "password",
                    type: "password",
                }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    // console.log(credentials)
                    // Find the user by email
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                    });

                    // If user doesn't exist, return null
                    if (!user) {
                        // console.log("invalid email")
                        return null;
                    }

                    // Check if the provided password matches the stored hashed password
                    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

                    if (!isPasswordValid) {
                        // console.log("invalid password")
                        return null;
                    }

                    // If everything is valid, return the user object
                    return {
                        id: user.id.toString(),
                        email: user.email,
                        name: user.name,
                    };
                } catch (error) {
                    console.error("Error in authorize function:", error);
                    return null;
                }
            },

        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).id = token.id;
                (session.user as any).name = token.name;
            }
            return session;
        },
    }
};
