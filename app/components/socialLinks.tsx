import styles from "./socialLinks.module.css";

export type SocialLink = {
  title: string;
  href: string;
  logo: string;
};
type socialLinksProps = { links: SocialLink[] };

export const SocialLinks = ({ links }: socialLinksProps) => {
  return (
    <nav className={styles.dock}>
      <ul>
        {links.map(({ title, href, logo }: SocialLink) => (
          <li key={title} className={styles.socialLink} data-tooltip={title}>
            <a href={href}>
              <img src={logo} alt={title} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
