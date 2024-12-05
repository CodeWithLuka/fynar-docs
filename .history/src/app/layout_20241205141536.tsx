import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Fynar Docs",
	description:
		"Fynar Docs is a powerful real-time document collaboration platform that lets you create, edit, and share documents seamlessly with your team. Designed for productivity, Fynar Docs combines intuitive features like live editing, auto-saving, rich formatting tools, and multi-user collaboration with unparalleled speed and reliability. Whether you're drafting reports, planning projects, or brainstorming ideas, Fynar Docs keeps your work organized, synchronized, and accessible from any device. Experience the future of teamwork with Fynar Docs—where innovation meets simplicity. Perfect for businesses, students, and creatives.",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/logo.svg",
				href: "/logo.svg",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/logo.svg",
				href: "/logo.svg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` antialiased`}>{children}</body>
		</html>
	);
}
