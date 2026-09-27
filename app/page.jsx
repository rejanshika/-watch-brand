import Hero from "@/components/Hero";
import OverlapScroll from "@/components/OverlapScroll";
import Marquee from "@/components/Marquee";
import ISTDifference from "@/components/ISTDifference";
import Motion from "@/components/Motion";
import Products from "@/components/Products";
import WhoWeAre from "@/components/WhoWeAre";
import CraftFilm from "@/components/CraftFilm";
import Enquire from "@/components/Enquire";

export default function Home() {
  return (
    <main>
      <Hero />
      <OverlapScroll />
      <Marquee />
      <ISTDifference />
      <Motion />
      <Products />
      <WhoWeAre />
      <CraftFilm />
      <Enquire />
    </main>
  );
}
