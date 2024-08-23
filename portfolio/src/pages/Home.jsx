import HeroSection from "../components/HeroSection/HeroSection";
import LatestWork from "../components/LatestWork/LatestWork";

export default function Home() {
  return (
    <main className="mt-32 container max-w-full px-10 md:max-w-[800px] xl:max-w-[1200px]  2xl:max-w-[1524px]  m-auto text-secondaryText">
      <HeroSection />
      <LatestWork />
    </main>
  );
}
