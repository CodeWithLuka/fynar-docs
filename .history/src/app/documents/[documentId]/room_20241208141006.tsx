"use client";

import { useParams } from "next/navigation";
import { ReactNode, useState } from "react";

import {
	LiveblocksProvider,
	RoomProvider,
	ClientSideSuspense,
} from "@liveblocks/react/suspense";

import { FullscreenLoader } from "@/components/fullscreen-loader";

export function Room({ children }: { children: ReactNode }) {
	const params = useParams();

	type User = { id: string; name: string; avatar: string };

	const [users, setUsers] = useState<User[]>([]);

	return (
		<LiveblocksProvider
			throttle={16}
			authEndpoint="/api/liveblocks-auth"
			resolveUsers={() => []}
			resolveMentionSuggestions={() => []}
			resolveRoomsInfo={() => []}
		>
			<RoomProvider id={params.documentId as string}>
				<ClientSideSuspense
					fallback={<FullscreenLoader label="Fynar Room Loading" />}
				>
					{children}
				</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	);
}
