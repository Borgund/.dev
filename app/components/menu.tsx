import { NavLink } from "@remix-run/react";
import styles from "./menu.module.css";

// biome-ignore lint/correctness/noUndeclaredVariables: <Remix stuff>
export const Menu: React.FC = () => {
	const now = new Date();
	return (
		<nav className={styles.menu}>
			<div>
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				></NavLink>
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
			</div>
			<div>
				<img
					src="https://help.apple.com/assets/6529D8627783ACA29F083601/6529D866CFDD5FD5B90BAB1B/no_NO/e6adbadfe26920bf8c4b8d74d5ec8b18.png"
					alt=""
					height="15"
					width="21"
				/>
				<p>{`${now.toLocaleDateString()}`}</p>
			</div>
		</nav>
	);
};
