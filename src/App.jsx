import Hero from "./sections/Hero";
import HeroSpacer from "./sections/HeroSpacer";
import ModelIntro from "./sections/ModelIntro";
import GalleryIntro from "./sections/GalleryIntro";
import ScrollGallery from "./sections/ScrollGallery";
import GalleryEndSpacer from "./sections/GalleryEndSpacer";
import FullscreenGallery from "./sections/FullscreenGallery";
import PhilosophySpacer from "./sections/PhilosophySpacer";
import Philosophy from "./sections/Philosophy";
import ContactIntro from "./sections/ContactIntro";
import StudioPresence from "./sections/StudioPresence";
import Header from "./components/Header";
export default function App() {
  return (
    <>
<Header />

      <Hero />
      <HeroSpacer />
      <ModelIntro />
      <GalleryIntro />
     <section id="works">
  <ScrollGallery />
</section>
      <GalleryEndSpacer />
      <FullscreenGallery />
      <PhilosophySpacer />
      <Philosophy />
      <section id="contact">
      <ContactIntro />
      </section>
      <section id="studio">
       <StudioPresence />
     </section>
    </>
  );
}
