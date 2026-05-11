import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { TrendingGrid } from "@/components/home/TrendingGrid";
import { CherriesSpotlight } from "@/components/home/CherriesSpotlight";
import { Promises } from "@/components/home/Promises";
import { BrandStory } from "@/components/home/BrandStory";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <TrendingGrid />
      <CherriesSpotlight />
      <Promises />
      <BrandStory />
      <Newsletter />
    </>
  );
}
