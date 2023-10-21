import { Element } from "react-scroll";

// Constants
import contacts from "@/constants/contacts";

export const Contact = () => (
  <Element name="Contact" className="bg-secondary px-4 py-16">
    <section className="mx-auto max-w-screen-lg space-y-8">
      <header className="text-center text-xl font-semibold underline underline-offset-4 md:text-2xl">
        Contact <span className="italic text-primary">Me</span>
      </header>
      <h1 className="text-2xl font-semibold md:text-3xl">
        Don't be shy! Hit me up!
      </h1>
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        {contacts.map((contact, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white p-3 shadow-md">
              <contact.icon className="text-primary" />
            </div>
            <div className="space-y-0">
              <h1 className="text-sm font-bold">{contact.title}</h1>
              <p className="text-sm">{contact.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Element>
);
