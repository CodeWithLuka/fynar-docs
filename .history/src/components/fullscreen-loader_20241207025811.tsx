import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
	label?: string;
}

export const FullscreenLoader = ({ label }: FullscreenLoaderProps) => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-2 text-blue-500 gap-y-4">
			<LoaderIcon className="size-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
			{label && <p className="text-sm text-blue-300">{label}</p>}
		</div>
	);
};
