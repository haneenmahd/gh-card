import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github';
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        })
    ]
}

export default NextAuth(authOptions);