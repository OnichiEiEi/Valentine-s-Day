import Navbar from "@/src/components/navbar";
import Hero from "@/src/components/hero";
import Footer from "@/src/components/footer";
import Timeline from "@/src/components/timeline";
import Letter from "@/src/components/letter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Timeline />
      <Letter />
      <Footer />
    </div>
  );
}
