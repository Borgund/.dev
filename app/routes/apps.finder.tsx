import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Finder" },
		{
			name: "description",
			content: "My name is Adrian Borgund and i am a developer!",
		},
	];
};

export default function Index() {
	return (
		<>
			<p>Finder</p>
		</>
	);
}
