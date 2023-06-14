'use client';

import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";

export default function GitHubConnect() {
    const handleGoogleSignIn = async () => signIn('github', { callbackUrl: 'http://localhost:3000' });

    return (
        <button
            className='cursor-pointer flex items-center justify-center gap-2 mb-5 px-2 py-1 rounded-full ring-1 ring-gray-300 hover:ring-gray-500 transition-shadow'
            onClick={handleGoogleSignIn}>
            <p className='text-sm text-gray-500 hover:text-gray-700'>Connect your GitHub account</p>

            <ArrowRight size={14} />
        </button>
    )
}