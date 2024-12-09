import { TableCell, TableRow } from "@/components/ui/table";

import { Doc } from "../../../convex/_generated/dataModel";

interface DocumentRowProps {
	document: Doc<"documents">;
}

export const DocumentRow = () => {
	return (
		<div>
			<div>DocumentRow</div>
		</div>
	);
};
