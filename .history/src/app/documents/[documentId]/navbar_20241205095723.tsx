import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between">
			<div className="flex gap-2 items-center">
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="Fynar Docs Logo"
						width={36}
						height={36}
					/>
				</Link>
				<div className="flex flex-col">
					{/* Document Input */}
					{/* MenuBar */}
				</div>
			</div>
		</nav>
	);
};
