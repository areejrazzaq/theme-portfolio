import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { Accomplishments } from './components/Accomplishments';
import { FutureGoals } from './components/FutureGoals';
import { SoftSkills } from './components/SoftSkills';
import { PhotoCollage } from './components/PhotoCollage';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Introduction />
        <Accomplishments />
        <FutureGoals />
        <SoftSkills />
        <PhotoCollage />
      </main>
      <Footer />
    </div>;
}