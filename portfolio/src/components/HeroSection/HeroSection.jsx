import ekrem from "/erkem3.jpg";
export default function HerSection() {
  return (
    <section className="flex xl:flex-row flex-col justify-center items-center">
      <section className="basis-[45%] flex flex-col text-center xl:text-start xl:block order-2 xl:order-1">
        <h1 className="2xl:text-[70px] xl:[65px] md:text-[50px] text-[35px] max-[359px]:text-[30px] text-primaryText font-extrabold ">
          I'm a <span className="text-active">full-stack developer </span> based
          in Bulgaria
        </h1>
        <h3 className="xl:text-xl md:text-[1rem]">
          I provide innovative and tailored software solutions for every need
        </h3>
      </section>
      <section className="img-container  xl:order-2">
        <img
          id="hero-img"
          src={ekrem}
          alt="Ekrem Beytula"
          className="xl:w-[600px] md:w-[400px] w-[400px] relative left-10 sm:left-14"
        />
      </section>
    </section>
  );
}
