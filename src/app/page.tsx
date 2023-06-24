'use client'

import Balancer from 'react-wrap-balancer';
import Pill from '@/components/ui/Pill';

import { GitHub } from 'react-feather';
import icons from '@/theme/icons';
import { signIn, useSession } from 'next-auth/react';
import Hero from '@/components/hero';

export default async function Page() {
  return (
    <div>
      <Pill
        icon={icons.github}
        label="Connect with GitHub"
        action={() => signIn()}
      />

      <Hero />

      {/* Design the page without the tokens (no one would pay for it.) this is a personal project for learning purpose. */}
      {/* Support adding private repos using GitHub OAuth and Access Token using Next Auth */}
      {/* With V3 introduce tokens and monetize the app better. */}
    </div>
  )
}
