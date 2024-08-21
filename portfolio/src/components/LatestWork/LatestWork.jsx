import mm1 from "/mealmaster1.png";
export default function LatestWork() {
  return (
    <section>
      <header>
        <h1>Latest work</h1>
      </header>
      <ul>
        <li>
          <section>
            <h3>Internship</h3>
            <img src={mm1} alt="" className="w-[450px]" />
          </section>
          <article>
            <h4>Mealmaster</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet
              pariatur id omnis maiores inventore. Eius eveniet accusantium
              praesentium asperiores, aut maxime autem temporibus, suscipit,
              ipsam repellendus nesciunt tempora eaque.
            </p>

            <section>
              <h5>Project Info</h5>
              <div>
                <p>Tech stack</p>
              </div>
              <div>
                <p>role</p>
                <p>Full-stack Developer</p>
              </div>
            </section>
          </article>
        </li>
      </ul>
    </section>
  );
}
