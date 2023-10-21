import { Element } from "react-scroll";

// Components
import techs from "@/constants/techs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// assets
import HandIMG from "@/assets/hand.png";
import ProfileIMG from "@/assets/profile.jpg";

export const Home = () => (
  <Element
    name="Home"
    className="grid h-full place-content-center bg-inherit p-4"
  >
    <div className="mx-auto max-w-screen-lg">
      <section className="grid grid-cols-3 gap-8">
        <header className="col-span-3 space-y-6 md:col-span-2">
          <h1 className="text-5xl font-semibold sm:text-6xl">
            Senior Frontend Developer
          </h1>
          <img
            src={HandIMG}
            alt="hand image"
            className="h-12 w-12 animate-bounce object-cover md:h-16 md:w-16"
          />
          <p className="font-medium md:text-xl">
            Hi, I'm Alula Mekonen. A professional Front-end React/Nextjs
            Developer based in Mek'ele, Ethiopia.
          </p>
        </header>
        <div className="col-span-1 hidden w-full items-center justify-center rounded-2xl ring-4 ring-offset-4 md:flex lg:rounded-full">
          <img
            src={ProfileIMG}
            alt="profile image"
            className="h-72 w-72 shrink-0 rounded-2xl object-cover lg:h-80 lg:w-80 lg:rounded-full"
          />
        </div>
      </section>
      <section className="mt-8 flex flex-wrap items-center gap-4 md:mt-16 md:gap-12">
        <h1 className="shrink-0 text-xl font-semibold">Tech Stack |</h1>
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          {techs.map((tech, i) => (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger className="transition-all duration-500 hover:scale-[1.2]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white p-3 shadow-md">
                    <img
                      src={tech.img}
                      alt="react js logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <TooltipContent>
                    <p className="text-xs font-semibold">{tech.title}</p>
                  </TooltipContent>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </section>
    </div>
  </Element>
);
