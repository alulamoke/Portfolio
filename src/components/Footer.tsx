// Components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Constants
import socialLinks from "@/constants/socialLinks";

export const Footer = () => (
  <main className="bg-inherit p-4">
    <footer className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {socialLinks.map((socialLink, i) => (
          <TooltipProvider key={i}>
            <Tooltip>
              <TooltipTrigger>
                <a href={socialLink.url} target="_blank">
                  <socialLink.icon size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-semibold">{socialLink.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <header className="text-xs font-medium sm:text-sm">
        Copyright ©2023. All rights are reserved
      </header>
    </footer>
  </main>
);
