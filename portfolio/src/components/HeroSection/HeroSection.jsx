import ekrem from "/erkem3.jpg";
export default function HerSection() {
  return (
    <main className="mt-32 w-full text-navText">
      <section className="flex justify-center items-center">
        <section className="basis-2/5">
          <h1 className="text-[70px] text-navTextHover font-extrabold ">
            Ekrem is a{" "}
            <span className="text-active">full-stack developer </span> based in
            Bulgaria
          </h1>
          <h3 className="text-xl">
            He provides innovative and tailored software solutions for every
            need
          </h3>
        </section>
        <section className="img-conainer">
          <img
            id="hero-img"
            src={ekrem}
            alt="Ekrem Beytula"
            className="w-[600px] relative left-14"
          />
        </section>
      </section>
    </main>
  );
}
