import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import EmergingSection from "@/components/EmergingSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ManifestoSection />
      <EmergingSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
