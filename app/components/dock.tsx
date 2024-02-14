import styles from "./dock.module.css";

export type DockItem = {
  title: string;
  href: string;
  logo: string;
};
type DockProps = { links: DockItem[] };

export const Dock = ({ links }: DockProps) => {
  return (
    <nav className={styles.dock}>
      <ul>
        {links.map(({ title, href, logo }: DockItem) => (
          <li key={title} className={styles.dockItem} data-tooltip={title}>
            <a href={href}>
              <img src={logo} alt={title} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
