import AboutSection from "../components/About/AboutSection";
import DetailedAbout from "../components/About/DetailedAboutMe";

export default function About() {
  return (
    <main className="mt-32 container max-w-full px-10 md:max-w-[800px] xl:max-w-[1200px]  2xl:max-w-[1524px]  m-auto text-secondaryText">
      <DetailedAbout />
    </main>
  );
}
