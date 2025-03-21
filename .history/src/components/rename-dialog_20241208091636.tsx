"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

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
	initialTitle: string;
	children: React.ReactNode;
}

export const RenameDialog = ({
	documentId,
	initialTitle,
	children,
}: RenameDialogProps) => {
	const update = useMutation(api.documents.updateById);

	const [isUpdating, setIsUpdating] = useState<boolean>(false);

	const [title, setTitle] = useState<string>(initialTitle);

	const [open, setOpen] = useState<boolean>(false);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsUpdating(true);

		update({ id: documentId, title: title.trim() || "Untitled" })
			.catch(() => toast.error("Something Went Wrong"))
			.then(() => toast.success("Document Successfully Updated"))
			.finally(() => {
				setIsUpdating(false);
				setOpen(false);
			});
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent onClick={(e) => e.stopPropagation()}>
				<form onSubmit={onSubmit}>
					<DialogHeader>
						<DialogTitle>Rename Document</DialogTitle>
						<DialogDescription>
							Enter a new name for this document.
						</DialogDescription>
					</DialogHeader>
					<div className="my-4">
						<Input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Document name"
							onClick={(e) => e.stopPropagation()}
						/>
					</div>
					<DialogFooter>
						<Button
							variant="ghost"
							type="button"
							disabled={isUpdating}
							onClick={(e) => {
								e.stopPropagation();
								setOpen(false);
							}}
						>
							Cancel
						</Button>
						<Button
							type="submit"
							disabled={isUpdating}
							onClick={(e) => e.stopPropagation()}
						>
							Save
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
