import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
