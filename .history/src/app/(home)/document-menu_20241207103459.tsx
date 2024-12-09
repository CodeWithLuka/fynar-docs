import { MoreVerticalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const DocumentMenu = () => {
	return (
		<Button variant="ghost" size="icon" className="rounded-full">
			<MoreVerticalIcon className="size-4" />
		</Button>
	);
};
