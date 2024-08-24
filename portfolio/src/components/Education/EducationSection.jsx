import CertificateSection from "./CertificateSection";

import nptg from "/nptgLogo.png";
import softuni from "/softUniLogo.png";
import udemy from "/udemy.svg";
export default function EducationSection() {
  return (
    <section className="sm:mt-64 flex flex-col gap-24">
      <header className="text-center sm:text-start sm:ml-32">
        <h3 className="text-5xl md:text-[80px] text-primaryText font-extrabold">
          Education
        </h3>
        <h4 className="text-[1rem] md:text-2xl">Where did I learn from</h4>
      </header>
      <hr className="bg-mutedGray w-full" />
      <ul className="grid xl:grid-cols-3 grid-cols-1 items-center gap-10">
        <li className="flex flex-col bg-secondary px-10 py-8 rounded-lg">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={nptg} alt="" />
                <h5 className="text-lg font-bold">
                  NPTG "Shandor Petyofi" Razgrad
                </h5>
              </div>
              <div>
                <h6 className="text-lg font-extrabold">Software Development</h6>
                <p>2019-2024</p>
              </div>
            </div>
            <h4 className="text-active">
              Grade: <span>5.55</span>
            </h4>
          </section>
        </li>
        <li className="flex flex-col bg-secondary px-10 py-8 rounded-lg">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={softuni} alt="" className="w-16" />
                <h5 className="text-lg font-bold">SoftUni</h5>
              </div>
              <div>
                <h6 className="text-lg font-extrabold">Software Engineering</h6>
                <p>2022-2024</p>
              </div>
            </div>
            <h4 className="text-active">
              Avg. Grade: <span>6.00</span>
            </h4>
          </section>
        </li>
        <li className="flex flex-col sm:min-h-[263.7px] bg-secondary px-10 py-8 rounded-lg">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={udemy} alt="" className="w-32" />
                <h5 className="text-lg font-bold">Udemy</h5>
              </div>
              <div>
                <h6 className="text-lg font-extrabold">
                  Languages and frameworks
                </h6>
              </div>
            </div>
          </section>
        </li>
      </ul>
      <hr className="bg-mutedGray w-full" />
      <section className="flex flex-col gap-12">
        <h4 className="text-2xl md:text-[50px]">Certificates</h4>
        <CertificateSection />
      </section>
    </section>
  );
}
