// homepage that composes all the sections together
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsHorizontal from './components/ProjectsHorizontal';
import About from './components/About';
import Lab from './components/Lab';
import Contact from './components/Contact';
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="snap-y snap-proximity scroll-smooth">
      <Layout>
        <Navbar />
        <Hero />
        <ProjectsHorizontal />
        <About />
        <Lab />
        <Contact />
        <Footer />
      </Layout>
    </main>
  );
}
