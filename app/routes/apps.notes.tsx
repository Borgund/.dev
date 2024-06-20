import type { MetaFunction } from "@remix-run/node";
import { SideNav } from "~/components/notes/SideNav";
import { TopNav } from "~/components/notes/TopNav";

export const meta: MetaFunction = () => {
	return [
		{ title: "Notes" },
		{
			name: "description",
			content: "My name is Adrian Borgund and i am a developer!",
		},
	];
};

export default function Index() {
	return (
		<>
			<div>
				<TopNav />
				<div>
					<SideNav></SideNav>
				</div>
			</div>
		</>
	);
}
