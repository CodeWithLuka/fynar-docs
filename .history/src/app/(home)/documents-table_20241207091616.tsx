import { PaginationStatus } from "convex/react";

import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Doc } from "../../../convex/_generated/dataModel";

interface DocumentsTableProps {
	documents: Doc<"documents">[] | undefined;
	loadMore: (numItems: number) => void;
	status: PaginationStatus;
}

export const DocumentsTable = ({
	documents,
	loadMore,
	status,
}: DocumentsTableProps) => {
	return (
		<div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5">
			<div>Document</div>
		</div>
	);
};
