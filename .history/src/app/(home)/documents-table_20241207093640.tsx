import { PaginationStatus } from "convex/react";
import { LoaderIcon } from "lucide-react";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { DocumentRow } from "./document-row";
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
			{documents === undefined ? (
				<div className="flex justify-center items-center h-24">
					<LoaderIcon className="size-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
				</div>
			) : (
				<Table>
					<TableHeader>
						<TableRow className="hover:bg-transparent border-none">
							<TableHead>Name</TableHead>
							<TableHead>&nbsp;</TableHead>
							<TableHead>Shared</TableHead>
							<TableHead>Created At</TableHead>
						</TableRow>
					</TableHeader>
					{documents.length === 0 ? (
						<TableBody>
							<TableRow className="hover:bg-transparent">
								<TableCell
									colSpan={4}
									className="h-24 text-center text-muted-foreground"
								>
									No Documents Found
								</TableCell>
							</TableRow>
						</TableBody>
					) : (
						<TableBody>
							{documents.map((document) => (
								<DocumentRow
									key={document._id}
									document={document}
								/>
							))}
						</TableBody>
					)}
				</Table>
			)}
		</div>
	);
};
