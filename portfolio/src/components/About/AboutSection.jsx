import CheckItOut from "../LatestWork/CheckItOut";
import ekrem from "/ekremCodes.jpg";
export default function AboutSection() {
  return (
    <section className="mt-64 flex flex-col gap-24">
      <h3 className="text-[70px] text-primaryText font-extrabold">About me</h3>
      <ul className="flex flex-col sm:grid grid-cols-2 items-center">
        <section className="flex justify-start">
          <div className="img-container ">
            <img src={ekrem} alt="" className="pl-20" />
          </div>
        </section>
        <li className="flex flex-col gap-3">
          <h4 className="text-[25px] text-primaryText font-normal">
            I am a young and dynamic software developer with a relentless
            commitment to delivering high-quality, innovative solutions.
          </h4>
          <p>
            I take great pride in producing clean, efficient, and robust code,
            ensuring that every product I work on meets the highest standards of
            performance and reliability. I consistently strive to exceed
            expectations, giving my all to every project I lead or participate
            in, and actively contributing to team success. Despite my youth, I
            have a strong focus on mastering all stages of the software
            development lifecycle, from initial concept and design to final
            deployment and ongoing maintenance. Solving a tricky bug or cracking
            a complex problem gives me a dopamine boost stronger than a double
            shot of espresso—so you can imagine how much caffeine I save!
          </p>
          <CheckItOut page={"/about"} label={"More about me"} />
        </li>
      </ul>
    </section>
  );
}
