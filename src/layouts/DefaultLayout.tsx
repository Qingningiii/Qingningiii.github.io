import type { ReactNode } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Crosshair from '../components/crosshair';

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* CRT Scanline overlay */}
      <div className="scanline-overlay" />
      {/* Circuit dot background */}
      <div className="fixed inset-0 circuit-bg opacity-40 pointer-events-none" />

      {/* Global crosshair cursor — tracks entire viewport */}
      <Crosshair color="#00ff88" />

      <Header />
      <main className="pt-32 pb-margin-lg px-margin-lg max-w-7xl mx-auto space-y-24 relative z-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
