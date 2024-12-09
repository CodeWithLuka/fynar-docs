import { ExternalLinkIcon, MoreVerticalIcon, Trash2Icon } from "lucide-react";

import { RemoveDialog } from "@/components/remove-dialog";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Id } from "../../../convex/_generated/dataModel";

interface DocumentMenuProps {
	documentId: Id<"documents">;
	title: string;
	onNewTab: (id: Id<"documents">) => void;
}

export const DocumentMenu = ({
	documentId,
	title,
	onNewTab,
}: DocumentMenuProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="rounded-full">
					<MoreVerticalIcon className="size-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<RemoveDialog documentId={documentId}>
					<DropdownMenuItem>
						<Trash2Icon className="size-4 mr-2" />
						Remove
					</DropdownMenuItem>
				</RemoveDialog>
				<DropdownMenuItem onClick={() => onNewTab(documentId)}>
					<ExternalLinkIcon className="size-4 mr-2" />
					Open in a new tab
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
