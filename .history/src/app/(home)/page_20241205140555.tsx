import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Navbar } from "./navbar";

const HomePage = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
				<Navbar />
			</div>
			<div className="mt-16">
				<Link href="/documents/123" className="text-sky-500">
					Click
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
