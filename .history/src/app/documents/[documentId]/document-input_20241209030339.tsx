import { useMutation } from "convex/react";
import { useRef, useState } from "react";
import { BsCloudCheck } from "react-icons/bs";

import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

interface DocumentInputProps {
	title: string;
	id: Id<"documents">;
}

export const DocumentInput = ({ title, id }: DocumentInputProps) => {
	const [value, setValue] = useState<string>(title);
	const [isError, setIsError] = useState<boolean>(false);
	const [isPending, setIsPending] = useState<boolean>(false);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const mutate = useMutation(api.documents.updateById);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		setValue(newValue);

		// Todo: Debounced Value
	};

	return (
		<div className="flex items-center gap-2">
			{isEditing ? (
				<form className="relative w-fit max-w-[50ch]">
					<span className="invisible whitespace-pre px-1.5 text-lg">
						{value || " "}
					</span>
					<input
						ref={inputRef}
						value={value}
						onChange={onChange}
						className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
					/>
				</form>
			) : (
				<span
					onClick={() => {
						setIsEditing(true);
						setTimeout(() => {
							inputRef.current?.focus();
						}, 0);
					}}
					className="text-lg px-1.5 cursor-pointer truncate"
				>
					{title}
				</span>
			)}
			<BsCloudCheck />
		</div>
	);
};
