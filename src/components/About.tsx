import { Element } from "react-scroll";

// assets
import AboutIMG from "@/assets/about-img.webp";

export const About = () => (
  <Element name="About" className="bg-secondary px-4 py-16">
    <section className="mx-auto max-w-screen-lg space-y-16">
      <header className="text-center text-xl font-semibold underline underline-offset-4 md:text-2xl">
        About <span className="italic text-primary">Me</span>
      </header>
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <img
          src={AboutIMG}
          alt="about image"
          className="h-96 w-full shrink-0 -rotate-3 rounded-md object-cover shadow-md"
        />
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            A dedicated Front-end Developer based in Mek'ele, Ethiopia
          </h1>
          <p className="text-sm">
            As a Senior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, Reactjs, Nextjs, Redux and
            Tailwind. I excel in designing and maintaining responsive websites
            that offer a smooth user experience. My expertise lies in crafting
            dynamic, engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques. I
            am also a team player who thrives in collaborating with
            cross-functional teams to produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  </Element>
);
