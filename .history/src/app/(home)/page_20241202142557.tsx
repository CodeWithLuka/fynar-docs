import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<p>Hello World</p>
			<Button>Click Me</Button>
			<Link href="/documents/123" className="text-sky-500">
				Click
			</Link>
		</div>
	);
};

export default HomePage;
