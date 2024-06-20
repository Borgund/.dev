import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	json,
	useLoaderData,
	useLocation,
} from "@remix-run/react";
import posthog from "posthog-js";
import globalStyles from "./global.css";

import { useEffect } from "react";
import Footer from "./components/footer";
import { Menu } from "./components/menu";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: globalStyles },
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export async function loader() {
	return json({
		POSTHOG_KEY: process.env.POSTHOG_KEY ?? "",
		POSTHOG_HOST: process.env.POSTHOG_HOST ?? "",
	});
}

function PosthogInit() {
	const { POSTHOG_KEY, POSTHOG_HOST } = useLoaderData<typeof loader>();

	useEffect(() => {
		console.log("ENV:", POSTHOG_KEY, POSTHOG_HOST);
		posthog.init(POSTHOG_KEY, {
			api_host: POSTHOG_HOST,
			person_profiles: "identified_only",
			capture_pageview: false,
		});
	}, []);

	return null;
}

export default function App() {
	const location = useLocation();
	useEffect(() => {
		posthog.capture("$pageview");
	}, [location]);
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Menu />
				<Outlet />
				<Footer />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
				<PosthogInit />
			</body>
		</html>
	);
}
