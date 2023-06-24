'use client'

import Hero from '@/components/hero';
import { styled } from 'styled-components';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: clamp(30vw, 560px, 100vw);

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export default async function Page() {
  return (
    <Container>
      <NavBar />

      <Hero />

      <Footer />

      {/* Design the page without the tokens (no one would pay for it.) this is a personal project for learning purpose. */}
      {/* Support adding private repos using GitHub OAuth and Access Token using Next Auth */}
      {/* With V3 introduce tokens and monetize the app better. */}
    </Container>
  )
}
