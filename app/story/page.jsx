import PageHeader from "@/components/PageHeader";
import Story from "@/components/Story";
import StoryInfographics from "@/components/StoryInfographics";
import Difference from "@/components/Difference";
import Specs from "@/components/Specs";

export const metadata = {
  title: "Our Story — IST 1947",
  description: "The India we know, made worth keeping. Explore the 1947 Meridian, Konark geometry, and victory lineage.",
};

export default function StoryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Story"
        title="Made worth keeping"
        intro="IST 1947 turns India's places, rituals, victories and everyday obsessions into watches — the way India lives time."
        motif="sun"
        artLabel="Est. 1947 · India"
      />
      <Story />
      <StoryInfographics />
      <Difference />
      <Specs />
    </main>
  );
}
