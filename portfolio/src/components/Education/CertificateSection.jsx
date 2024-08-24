import { useState } from "react";
import aspAdvanced from "/asp.net-Advanced.jpg";
import aspFun from "/asp.net-Fundamentals.jpg";
import ef from "/efcore.jpg";
import mssql from "/mssql.jpg";
import js from "/jsfr.jpg";
import htmlcss from "/htmlcss.jpg";
import oop from "/oop.jpg";
import advanced from "/csharpadvanced.jpg";
import fundamentals from "/csharpfundamentals.jpg";
import basics from "/csharpBasics.jpg";
import react from "/React-The-Complete-Guide-certificate.jpg";
import Certificate from "./Certificate";
export default function CertificateSection() {
  const [currentHover, setCurrentHover] = useState({ show: false, img: "" });
  function handleTrigger(args) {
    setCurrentHover(args);
  }
  return (
    <>
      <ul className="list-disc flex flex-col gap-4">
        <li>
          <Certificate
            href="https://www.udemy.com/certificate/UC-7d91da5b-328f-412f-9050-003a78abb068/"
            label="React The Complete Guide"
            img={react}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/214229/f485c9a0"
            label="ASP.NET Advanced"
            img={aspAdvanced}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/206796/6d729593"
            label="ASP.NET Fundamentals"
            img={aspFun}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/194100/59c8ee10"
            label="Entity Framework"
            img={ef}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/185696/c8c73869"
            label="MS SQL"
            img={mssql}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/181277/8fc26b37"
            label="JavaScript"
            img={js}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/174740/e610b0f5"
            label="HTML & CSS"
            img={htmlcss}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/168793/7b1b7501"
            label="C# OOP"
            img={oop}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/158198/94b30dec"
            label="C# Advanced"
            img={advanced}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/148917/6cb6f740"
            label="C# Fundamentals"
            img={fundamentals}
            trigger={handleTrigger}
          />
        </li>
        <li>
          <Certificate
            href="https://softuni.bg/certificates/details/135659/f42939a7"
            label="C# Basics"
            img={basics}
            trigger={handleTrigger}
          />
        </li>
      </ul>
      <img
        src={currentHover.img}
        className={`rounded-xl duration-200 hidden sm:block sm:w-44 md:w-96 absolute sm:left-64 md:left-[500px]  ${
          currentHover.show
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0 "
        }`}
      />
    </>
  );
}
