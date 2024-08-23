import HeroSection from "../components/HeroSection/HeroSection";
import LatestWork from "../components/LatestWork/LatestWork";

export default function Home() {
  return (
    <main className="mt-32 container max-w-[1524px] w-full m-auto text-secondaryText">
      <HeroSection />
      <LatestWork />
    </main>
  );
}
