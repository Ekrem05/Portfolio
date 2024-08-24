import CheckItOut from "../LatestWork/CheckItOut";
import collage from "/collage.png";
export default function DetailedAbout() {
  return (
    <section className="sm:mt-64 flex flex-col gap-24">
      <header className="text-center sm:text-start sm:ml-32">
        <h3 className="text-5xl md:text-[80px] text-primaryText font-extrabold">
          A little bit about me
        </h3>
        <h4 className="text-[1rem] md:text-2xl">Who I am and what I do</h4>
      </header>
      <hr className="bg-mutedGray w-full" />
      <ul className="flex flex-col sm:grid grid-cols-2 items-center gap-10">
        <section className="flex justify-start">
          <div className="">
            <img
              src={collage}
              alt=""
              className="w-[450px] rounded-xl shadow-2xl"
            />
          </div>
        </section>
        <li className="">
          <ul className="flex flex-col gap-10 ">
            <li>
              <h4 className="font-bold text-mutedGray text-xl">Who I am</h4>
              <p className="text-lg">
                My name is Ekrem Beytula and I am a full-stack web developer
                based in Razgrad, Bulgaria
              </p>
            </li>
            <li>
              <h4 className="font-bold text-mutedGray text-xl">What I do</h4>
              <p className="text-lg">
                I’m currently focused on my internship project MealMaster and
                managing several personal side projects. I'm also learning
                Golang to broaden my skill set and explore new technologies.
                When I’m not coding, I enjoy beekeeping on our family farm,
                which offers a peaceful escape into nature and a chance to
                unwind. I also enjoy hitting the gym and lifting heavy weights,
                proving that I can handle both code and dumbbells with equal
                enthusiasm. And if you ever see me talking to my bees about the
                latest tech trends, don’t be surprised—they’re pretty good
                listeners!
              </p>
            </li>
            <li>
              <h4 className="font-bold text-mutedGray text-xl">What I did</h4>
              <p className="text-lg">
                Over the past three years, I’ve poured countless hours into
                mastering software development and programming, diligently
                preparing for numerous exams along the way. My dedication paid
                off with graduation from both SoftUni and high school in the
                same month, earning an impressive average grade of 6.00 at both.
                After graduation, I dove into personal projects, exploring and
                mastering new technologies to enhance my ability to deliver
                cutting-edge solutions. This relentless quest for knowledge and
                hands-on experience has been key to advancing my skills. And if
                you’re wondering how I managed to balance all this, let’s just
                say caffeine and sheer determination were my best friends!
              </p>
            </li>
            <li className="flex flex-col gap-5">
              <p className="text-lg ">
                Feel free to reach out via e-mail. Check out my Resume, or
                connect with me on LinkedIn.
              </p>
              <p>Let’s build something great! :)</p>
              <CheckItOut page={"/about"} label={"Download my CV"} />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
