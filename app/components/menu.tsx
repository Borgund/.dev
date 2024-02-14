import { NavLink } from "@remix-run/react";
import styles from "./menu.module.css";

export const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        
      </NavLink>
      <NavLink
        to="/cv"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Resume
      </NavLink>
      <NavLink
        to="/cv"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};
