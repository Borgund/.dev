import { NavLink } from "@remix-run/react";
import styles from "./dock.module.css";

export type DockItem = {
  title: string;
  href?: string;
  logo: string;
  to?: string;
  background?: boolean;
};
type DockProps = { links: DockItem[] };

export const Dock = ({ links }: DockProps) => {
  return (
    <nav className={styles.dock}>
      <ul>
        {links.map(({ title, href, logo, to, background }: DockItem) => (
          <li
            key={title}
            className={[
              styles.dockItem,
              background ? styles.background : "",
              href ? styles.externalLink : "",
            ].join(" ")}
            data-tooltip={title}
          >
            {href && (
              <a href={href} target="blank">
                <img src={`/${logo}`} alt={title} />
              </a>
            )}
            {to && !href && (
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img src={`/${logo}`} alt={title} />
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
