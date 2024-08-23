import ekrem from "/erkem3.jpg";
export default function HerSection() {
  return (
    <section className="flex xl:flex-row flex-col justify-center items-center">
      <section className="basis-[45%] flex flex-col text-center xl:text-start xl:block order-2 xl:order-1">
        <h1 className="xl:text-[70px] md:text-[50px] text-[46px]  text-primaryText font-extrabold ">
          Ekrem is a <span className="text-active">full-stack developer </span>{" "}
          based in Bulgaria
        </h1>
        <h3 className="xl:text-xl md:text-[1rem]">
          He provides innovative and tailored software solutions for every need
        </h3>
      </section>
      <section className="img-conainer  xl:order-2">
        <img
          id="hero-img"
          src={ekrem}
          alt="Ekrem Beytula"
          className="xl:w-[600px] md:w-[400px] w-[400px] relative left-14"
        />
      </section>
    </section>
  );
}
