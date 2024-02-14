import { Dock } from "./dock";

const footer = () => {
  return (
    <>
      <footer>
        <section title="Social links">
          <Dock
            links={[
              {
                title: "Finder",
                to: "/apps/finder",
                logo: "finder.svg",
              },
              {
                title: "Notes",
                to: "/apps/notes",
                logo: "notes.svg",
              },
              {
                title: "Github",
                href: "https://github.com/Borgund/",
                logo: "github.svg",
                background: true,
              },
              {
                title: "read.cv",
                href: "https://read.cv/borgund",
                logo: "cv-logo.svg",
                background: true,
              },
              {
                title: "LinkedIn",
                href: "https://no.linkedin.com/in/adrian-borgund-466a144a",
                logo: "linkedin.svg",
                background: true,
              },
            ]}
          />
        </section>
      </footer>
    </>
  );
};

export default footer;
