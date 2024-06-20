import type { MetaFunction } from "@remix-run/node";
import { Outlet, useNavigate } from "@remix-run/react";

import { Windowcontrols } from "~/components/windowcontrols";
import styles from "../styles/apps.module.css";

export const meta: MetaFunction = () => {
	return [
		{ title: "BorgundOS" },
		{
			name: "description",
			content: "My name is Adrian Borgund and i am a developer!",
		},
	];
};

export default function AppsIndex() {
	const navigate = useNavigate();
	return (
		<>
			<main className={styles.app}>
				<Windowcontrols
					on_close={() => navigate("/")}
					on_minimize={() => navigate("/")}
				/>
				<Outlet />
			</main>
		</>
	);
}
