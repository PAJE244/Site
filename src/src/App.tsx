import { Header } from './components/landing/Header';
import { Hero } from './components/landing/Hero';
import { SocialProof } from './components/landing/SocialProof';
import { Benefits } from './components/landing/Benefits';
import { About } from './components/landing/About';
import { Preview } from './components/landing/Preview';
import { Pricing } from './components/landing/Pricing';
import { FAQ } from './components/landing/FAQ';
import { Footer } from './components/landing/Footer';
import { ExitIntent } from './components/landing/ExitIntent';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <SocialProof />
      <Benefits />
      <About />
      <Preview />
      <Pricing />
      <FAQ />
      <Footer />
      <ExitIntent />
    </div>
  );
}
