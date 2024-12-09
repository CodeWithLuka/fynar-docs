import { PaginationStatus } from "convex/react";

import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Doc } from "../../../convex/_generated/dataModel";
import { LoaderIcon } from "lucide-react";

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
			{documents === undefined ? (
				<div className="flex justify-center items-center h-24">
					<LoaderIcon className="size-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};
