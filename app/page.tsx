// homepage that composes all the sections together
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Lab from './components/Lab';
import Contact from './components/Contact';


export default function Home() {
  return (
    <main className="snap-y snap-mandatory scroll-smooth">
      <Layout>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Lab />
        <Contact />
      </Layout>
    </main>
  );
}
