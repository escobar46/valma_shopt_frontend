import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { TrendingGrid } from "@/components/home/TrendingGrid";
import { EditorialBlock } from "@/components/home/EditorialBlock";
import { BrandValues } from "@/components/home/BrandValues";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedCategories />
      <TrendingGrid />
      <EditorialBlock />
      <BrandValues />
      <Newsletter />
    </>
  );
}
