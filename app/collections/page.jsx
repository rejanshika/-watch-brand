import PageHeader from "@/components/PageHeader";
import CollectionCatalog from "@/components/CollectionCatalog";
import AtelierConfigurator from "@/components/AtelierConfigurator";
import CollectionsInfographics from "@/components/CollectionsInfographics";
import { catalog } from "@/lib/content";

export const metadata = {
  title: "Collections — IST 1947",
  description: "Arka, Vanya and Vijay — every IST 1947 timepiece, calibres, and bespoke atelier studio.",
};

export default function CollectionsPage() {
  return (
    <main>
      <PageHeader eyebrow="The Catalogue" title="Collections" intro={catalog.intro} />
      <CollectionCatalog />
      <AtelierConfigurator />
      <CollectionsInfographics />
    </main>
  );
}
