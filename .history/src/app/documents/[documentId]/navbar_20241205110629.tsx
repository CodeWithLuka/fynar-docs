"use client";

import {
	FileIcon,
	FileJsonIcon,
	FilePenIcon,
	FilePlusIcon,
	FileTextIcon,
	PrinterIcon,
	TrashIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsFilePdf, BsFiletypeHtml } from "react-icons/bs";

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";

import { DocumentInput } from "./document-input";

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
					<DocumentInput />
					<div className="flex">
						<Menubar className="border-none bg-transparent shadow-none h-auto p-0">
							<MenubarMenu>
								<MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
									File
								</MenubarTrigger>
								<MenubarContent className="print:hidden">
									<MenubarSub>
										<MenubarSubTrigger>
											<FileIcon className="size-4 mr-2" />
											Save
										</MenubarSubTrigger>
										<MenubarSubContent>
											<MenubarItem>
												<FileJsonIcon className="size-4 mr-2" />
												JSON
											</MenubarItem>
											<MenubarItem>
												<BsFiletypeHtml className="size-4 mr-2" />
												HTML
											</MenubarItem>
											<MenubarItem>
												<BsFilePdf className="size-4 mr-2" />
												PDF
											</MenubarItem>
											<MenubarItem>
												<FileTextIcon className="size-4 mr-2" />
												Text
											</MenubarItem>
										</MenubarSubContent>
									</MenubarSub>
									<MenubarItem>
										<FilePlusIcon className="size-4 mr-2" />
										New Document
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem>
										<FilePenIcon className="size-4 mr-2" />
										Rename
									</MenubarItem>
									<MenubarItem>
										<TrashIcon className="size-4 mr-2" />
										Remove
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem onClick={() => window.print()}>
										<PrinterIcon className="size-4 mr-2" />
										Print{" "}
										<MenubarShortcut>⌘P</MenubarShortcut>
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
									Edit
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>
										<FileIcon className="size-4 mr-2" />
										Edit
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
									Insert
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>
										<FileIcon className="size-4 mr-2" />
										Insert
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
									Format
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>
										<FileIcon className="size-4 mr-2" />
										Format
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					</div>
				</div>
			</div>
		</nav>
	);
};
