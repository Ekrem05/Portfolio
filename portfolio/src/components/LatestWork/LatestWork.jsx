import mm1 from "/mealmasterPhone.png";
import filmDive from "/filmdivelaptop.png";
import honeyZone from "/honeyZone.png";
import sql from "/sql.png";

import { FaLocationArrow } from "react-icons/fa";
import CheckItOut from "./CheckItOut";

export default function LatestWork() {
  return (
    <section className="mt-64 flex flex-col gap-10">
      <header>
        <h2 className="text-[70px] text-primaryText font-extrabold">
          Latest work
        </h2>
      </header>
      <ul className="flex flex-col sm:gap-10 gap-72">
        <li className="text-primaryText flex flex-col sm:grid grid-cols-2 px-5 gap-10 sm:gap-32 ">
          <section className="bg-secondary p-5 rounded-3xl flex flex-col">
            <div className="flex justify-start">
              <h3 className="bg-base px-3 py-1 rounded-3xl">Internship</h3>
            </div>
            <div className="flex justify-center">
              <img
                src={mm1}
                alt=""
                className="w-[300px]  hover:cursor-pointer"
              />
            </div>
          </section>
          <article className="flex flex-col  gap-9">
            <h3 className="text-2xl">Meal Master</h3>
            <p className="text-secondaryText">
              <span className="font-extrabold">Meal Master</span> is an
              AI-powered app available on web, Android and iOS that helps users
              discover new recipes, create meals with ingredients they have on
              hand, and generate stunning food images. My responsibilities
              included integrating{" "}
              <a
                href="https://stripe.com/en-bg"
                className="text-active underline underline-offset-2"
              >
                Stripe
              </a>{" "}
              at the back-end for secure payment and subscription functionality,
              managing the entire front-end state using{" "}
              <a
                href="https://redux.js.org/"
                className="text-active underline underline-offset-2"
              >
                Redux
              </a>{" "}
              for seamless data flow, and connecting the front-end with the
              back-end to ensure smooth communication and operation
            </p>
            <div className="pb-2 flex justify-between border-b border-b-secondary">
              <p>Company</p>
              <CheckItOut
                href={"https://costeffective.software/"}
                label={" Cost Effective Software"}
              />
            </div>
            <section className="flex flex-col gap-5">
              <h5 className="pb-2 text-xl border-b border-b-secondary">
                Project Info
              </h5>

              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Tech stack</p>
                <div className="flex flex-wrap gap-1">
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
                <CheckItOut
                  href={"https://mealmasterbot.com/"}
                  label={"Check it out"}
                />
              </div>
            </footer>
          </article>
        </li>
        <li className="text-primaryText  flex flex-col sm:grid grid-cols-2   gap-10 sm:gap-32 ">
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
              <span className="font-extrabold">FilmDive</span> is an intuitive
              app designed to enhance the entertainment experience by offering
              users a comprehensive overview of the latest in film and
              television. The app features a dynamic interface where users can
              explore trending movies, discover upcoming releases, and access a
              curated selection of popular TV series. With an extensive library
              of thousands of movies and TV shows, FilmDive allows users to
              browse based on their personal preferences, delve into detailed
              information about each title, and watch trailers to make informed
              viewing choices. It's built with{" "}
              <a
                href="https://dotnet.microsoft.com/en-us/apps/aspnet"
                className="text-active underline underline-offset-2"
              >
                ASP.NET Core Web Api
              </a>{" "}
              on the back-end and{" "}
              <a
                href="https://react.dev/"
                className="text-active underline underline-offset-2"
              >
                React.js
              </a>{" "}
              as a front-end library. It utilizes JWT token authentication for
              secure user access, with each user's data and watchlist stored in
              a{" "}
              <a
                href="https://www.postgresql.org/"
                className="text-active underline underline-offset-2"
              >
                PostgreSQL
              </a>{" "}
              database thanks to{" "}
              <a
                href="https://www.learndapper.com/"
                className="text-active underline underline-offset-2"
              >
                Dapper
              </a>
            </p>

            <section className="flex flex-col gap-5">
              <h5 className="pb-2 text-xl border-b border-b-secondary">
                Project Info
              </h5>

              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Tech stack</p>
                <div className="flex flex-wrap gap-1">
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
                <CheckItOut
                  href={"https://filmdive.azurewebsites.net/"}
                  label={"Check it out"}
                />
                <CheckItOut
                  href={"https://github.com/Ekrem05/FilmDive"}
                  label={"See on GitHub"}
                />
              </div>
            </footer>
          </article>
        </li>
        <li className="text-primaryText  flex flex-col sm:grid  grid-cols-2   gap-10 sm:gap-32">
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
              <span className="font-extrabold">Honey Zone</span> is a
              comprehensive{" "}
              <a
                href="https://dotnet.microsoft.com/en-us/apps/aspnet"
                className="text-active underline underline-offset-2"
              >
                ASP.NET MVC
              </a>{" "}
              web application designed for the sale and management of bee
              products. The platform provides an intuitive user interface that
              simplifies navigation for both customers and administrators.
              Customers can easily browse and purchase a variety of bee-related
              products, while administrators have access to robust management
              tools for inventory control, order processing, and customer
              support. The application is built on a solid foundation with a{" "}
              <a
                href="https://www.mysql.com/"
                className="text-active underline underline-offset-2"
              >
                MySQL
              </a>{" "}
              database, Role-based authentication to ensure secure and tailored
              access, and{" "}
              <a
                href="https://learn.microsoft.com/en-us/ef/"
                className="text-active underline underline-offset-2"
              >
                Entity Framework
              </a>{" "}
              as an ORM for efficient data handling and queries.
            </p>

            <section className="flex flex-col gap-5">
              <h5 className="pb-2 text-xl border-b border-b-secondary">
                Project Info
              </h5>
              <div className="pb-2 flex justify-between border-b border-b-secondary">
                <p>Tech stack</p>
                <div className="flex flex-wrap gap-1">
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
                <CheckItOut
                  href={"https://honeyzone.azurewebsites.net/"}
                  label={"Check it out"}
                />
                <CheckItOut
                  href={"https://github.com/Ekrem05/Honey-Zone"}
                  label={"See on GitHub"}
                />
              </div>
            </footer>
          </article>
        </li>
      </ul>
    </section>
  );
}
