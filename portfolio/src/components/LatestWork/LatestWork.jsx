import mm1 from "/mealmasterPhone.png";
import filmDive from "/filmdivelaptop.png";
import honeyZone from "/honeyZone.png";
import sql from "/sql.png";

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
            <div className="pb-2 flex justify-between border-b border-b-secondary">
              <p>Company</p>
              <a
                href="https://costeffective.software/"
                className="underline text-active underline-offset-8"
              >
                Cost Effective Software
              </a>
            </div>
            <section className="flex flex-col gap-5">
              <h5 className="pb-2 text-xl border-b border-b-secondary">
                Project Info
              </h5>

              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Tech stack</p>
                <div className="flex gap-1">
                  <img
                    src="https://skillicons.dev/icons?i=cs"
                    height="40"
                    alt="csharp logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=dotnet"
                    height="40"
                    alt="dotnet"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    height="40"
                    alt="react logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    height="40"
                    alt="js logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=mongodb"
                    height="40"
                    alt="mongodb logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=azure"
                    height="40"
                    alt="azure logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    height="40"
                    alt="tailwindcss logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=vite"
                    height="40"
                    alt="vite logo"
                  />
                </div>
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
              <h3 className="bg-base px-3 py-1 rounded-3xl">
                Personal project
              </h3>
            </div>
            <div className="flex justify-center">
              <img src={filmDive} alt="" className="w-[600px]" />
            </div>
          </section>
          <article className="flex flex-col  gap-9">
            <h3 className="text-2xl">Film Dive</h3>
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

              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Tech stack</p>
                <div className="flex gap-1">
                  <img
                    src="https://skillicons.dev/icons?i=cs"
                    height="40"
                    alt="csharp logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=dotnet"
                    height="40"
                    alt="dotnet"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    height="40"
                    alt="react logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    height="40"
                    alt="js logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=postgres"
                    height="40"
                    alt="postgres logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=azure"
                    height="40"
                    alt="azure logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    height="40"
                    alt="tailwindcss logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=vite"
                    height="40"
                    alt="vite logo"
                  />
                </div>
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
              <h3 className="bg-base px-3 py-1 rounded-3xl">
                Personal project
              </h3>
            </div>
            <div className="flex justify-center">
              <img src={honeyZone} alt="" className="w-[700px]" />
            </div>
          </section>
          <article className="flex flex-col  gap-9">
            <h3 className="text-2xl">Honey Zone</h3>
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
              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Tech stack</p>
                <div className="flex gap-1">
                  <img
                    src="https://skillicons.dev/icons?i=cs"
                    height="40"
                    alt="csharp logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=dotnet"
                    height="40"
                    alt="dotnet"
                  />
                  <img
                    src={sql}
                    width={45}
                    className="bg-[#242938] rounded-md"
                    alt="mssql logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=azure"
                    height="40"
                    alt="azure logo"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=bootstrap"
                    height="40"
                    alt="bootstrap logo"
                  />
                </div>
              </div>
              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Role</p>
                <p>Back end developer</p>
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
