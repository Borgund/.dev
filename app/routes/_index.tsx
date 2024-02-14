import type { MetaFunction } from "@remix-run/node";
import { Dock } from "~/components/dock";

export const meta: MetaFunction = () => {
  return [
    { title: "Borgund.dev, Adrian" },
    {
      name: "description",
      content: "My name is Adrian Borgund and i am a developer!",
    },
  ];
};

export default function Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Borgund.dev</h1>
      <h2>Hi my name is Adrian Borgund and i am a developer</h2>
      <p>
        My favorite buzzwords and technologies at the moment:
        <ul>
          <li>Micro frontends</li>
          <li>Module federation</li>
          <li>Compount components</li>
          <li>Remix.run / Next.js</li>
          <li>Bun.sh</li>
          <li>Accessibility / A11y</li>
        </ul>
      </p>
      <img
        src="https://media.licdn.com/dms/image/C5603AQFEtopfImAx6w/profile-displayphoto-shrink_200_200/0/1549951544878?e=1712793600&v=beta&t=rMDihU83hrJLqSkPJZktWgA6krL71jtyxkPAI4lr0BE"
        loading="eager"
        alt=" of Adrian"
      />
      <section title="Social links">
        <Dock
          links={[
            {
              title: "Github",
              href: "https://github.com/Borgund/",
              logo: "github.svg",
            },
            {
              title: "read.cv",
              href: "https://read.cv/borgund",
              logo: "cv-logo.svg",
            },
            {
              title: "LinkedIn",
              href: "https://no.linkedin.com/in/adrian-borgund-466a144a",
              logo: "linkedin.svg",
            },
          ]}
        />
      </section>
    </main>
  );
}
