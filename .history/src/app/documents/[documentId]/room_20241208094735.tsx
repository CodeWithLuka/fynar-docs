"use client";

import { useParams } from "next/navigation";
import { ReactNode } from "react";
import {
	LiveblocksProvider,
	RoomProvider,
	ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
	const params = useParams();

	return (
		<LiveblocksProvider
			publicApiKey={
				"pk_dev_w_qiZ0j3ivIxLDq606lqy8zRe9lRrS9Y38iF1oFYdZ073p1JXocsQmKwcjVn3a9i"
			}
		>
			<RoomProvider id={params.documentId as string}>
				<ClientSideSuspense fallback={<div>Loading…</div>}>
					{children}
				</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	);
}
