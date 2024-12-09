import { SiGoogledocs } from "react-icons/si";

import { TableCell, TableRow } from "@/components/ui/table";

import { Doc } from "../../../convex/_generated/dataModel";

interface DocumentRowProps {
	document: Doc<"documents">;
}

export const DocumentRow = ({ document }: DocumentRowProps) => {
	return (
		<TableRow className="cursor-pointer">
			<TableCell className="w-[50px]">
				<SiGoogledocs className="size-6 fill-blue-500" />
			</TableCell>
			<TableCell className="font-medium md:w-[45%]">
				{document.title}
			</TableCell>
		</TableRow>
	);
};
