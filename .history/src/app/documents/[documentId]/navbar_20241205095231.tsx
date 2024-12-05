import Image from "next/image";

export const Navbar = () => {
	return (
		<nav>
			<Image
				src="/logo.svg"
				alt="Fynar Docs Logo"
				width={36}
				height={36}
			/>
		</nav>
	);
};
