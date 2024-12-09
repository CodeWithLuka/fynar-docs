import { MoreVerticalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

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
		<Button variant="ghost" size="icon" className="rounded-full">
			<MoreVerticalIcon className="size-4" />
		</Button>
	);
};
