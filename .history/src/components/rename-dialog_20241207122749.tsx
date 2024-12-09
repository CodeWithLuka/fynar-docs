"use client";

import { useMutation } from "convex/react";
import { useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

interface RenameDialogProps {
	documentId: Id<"documents">;
	children: React.ReactNode;
}

export const RenameDialog = ({ documentId, children }: RenameDialogProps) => {
	const rename = useMutation(api.documents.updateById);

	const [isRenaming, setIsRenaming] = useState<boolean>(false);

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<form>
					<DialogHeader>
						<DialogTitle>Rename Document</DialogTitle>
						<DialogDescription>
							Enter a new name for this document.
						</DialogDescription>
					</DialogHeader>
					<div className="my-4">
						<Input />
					</div>
					<DialogFooter>
						<Button>Cancel</Button>
						<Button>Save</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
