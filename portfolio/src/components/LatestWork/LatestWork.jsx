import mm1 from "/mealmasterPhone.png";
import { FaLocationArrow } from "react-icons/fa";

export default function LatestWork() {
  return (
    <section className="mt-64 flex flex-col gap-10">
      <header>
        <h1 className="text-[70px] text-primaryText font-extrabold">
          Latest work
        </h1>
      </header>
      <ul className="flex flex-col gap-10">
        <li className="text-primaryText grid grid-cols-2   gap-32  ">
          <section className="bg-secondary p-5 rounded-3xl flex flex-col">
            <div className="flex justify-start">
              <h3 className="bg-base px-3 py-1 rounded-3xl">Internship</h3>
            </div>
            <div className="flex justify-center">
              <img src={mm1} alt="" className="w-[300px]" />
            </div>
          </section>
          <article className="flex flex-col  gap-9">
            <h3 className="text-2xl">Mealmaster</h3>
            <p className="text-secondaryText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet
              pariatur id omnis maiores inventore. Eius eveniet accusantium
              praesentium asperiores, aut maxime autem temporibus, suscipit,
              ipsam repellendus nesciunt tempora eaque. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Iure amet pariatur id omnis
              maiores inventore. Eius eveniet accusantium praesentium
              asperiores, aut maxime autem temporibus, suscipit, ipsam
              repellendus nesciunt tempora eaque.
            </p>

            <section className="flex flex-col gap-5">
              <h5 className="pb-2 text-xl border-b border-b-secondary">
                Project Info
              </h5>
              <div className="pb-2 border-b border-b-secondary">
                <p>Tech stack</p>
              </div>
              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Role</p>
                <p>Full-stack Developer</p>
              </div>
            </section>
            <footer>
              <div className="flex gap-1 items-center">
                <a href="" className="text-active underline underline-offset-8">
                  Check it out
                </a>
                <FaLocationArrow className="text-active" />
              </div>
            </footer>
          </article>
        </li>
        <li className="text-primaryText grid grid-cols-2   gap-32  ">
          <section className="bg-secondary p-5 rounded-3xl flex flex-col">
            <div className="flex justify-start">
              <h3 className="bg-base px-3 py-1 rounded-3xl">Internship</h3>
            </div>
            <div className="flex justify-center">
              <img src={mm1} alt="" className="w-[300px]" />
            </div>
          </section>
          <article className="flex flex-col  gap-9">
            <h3 className="text-2xl">Mealmaster</h3>
            <p className="text-secondaryText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet
              pariatur id omnis maiores inventore. Eius eveniet accusantium
              praesentium asperiores, aut maxime autem temporibus, suscipit,
              ipsam repellendus nesciunt tempora eaque. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Iure amet pariatur id omnis
              maiores inventore. Eius eveniet accusantium praesentium
              asperiores, aut maxime autem temporibus, suscipit, ipsam
              repellendus nesciunt tempora eaque.
            </p>

            <section className="flex flex-col gap-5">
              <h5 className="pb-2 text-xl border-b border-b-secondary">
                Project Info
              </h5>
              <div className="pb-2 border-b border-b-secondary">
                <p>Tech stack</p>
              </div>
              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Role</p>
                <p>Full-stack Developer</p>
              </div>
            </section>
            <footer>
              <div className="flex gap-1 items-center">
                <a href="" className="text-active underline underline-offset-8">
                  Check it out
                </a>
                <FaLocationArrow className="text-active" />
              </div>
            </footer>
          </article>
        </li>
      </ul>
    </section>
  );
}
