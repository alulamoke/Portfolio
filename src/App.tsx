// Components
import { Home } from "@/components/Home";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const App = () => (
  <main className="h-screen w-full">
    <Navbar />
    <Home />
    <About />
    <Contact />
    <Footer />
  </main>
);
