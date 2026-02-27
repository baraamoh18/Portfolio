import React from 'react';
import { Background } from './components/Background';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background: '#0a0a0f',
        fontFamily: 'Inter, sans-serif'
      }}>

      {/* Animated background layer */}
      <Background />

      {/* Content layer */}
      <div
        className="relative"
        style={{
          zIndex: 10
        }}>

        <Nav />
        <main>
          <Hero />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </div>);

}