import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructor from "./components/Instructor";
import NewEvents from "./components/NewEvents";
import Service from "./components/Service";
import Testimonials from "./components/Testimonial";
import StickyScroll from "./components/roller";



export default function Home() {
  return (
  <main className="bg-black/[0.96] antialiased bg-grid-white/[0.002]">
    
    <HeroSection/>
    <Service/>
<StickyScroll/>
<Testimonials/>
<NewEvents/>
<Instructor/>
<Footer/>

  </main>
  );
}
