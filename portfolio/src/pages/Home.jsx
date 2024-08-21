import HeroSection from "../components/HeroSection/HeroSection";
import LatestWork from "../components/LatestWork/LatestWork";

export default function Home() {
  return (
    <div className="min-h-[1000px]">
      <HeroSection />
      <LatestWork />
    </div>
  );
}
