"use client";

import { BellIcon } from "lucide-react";

import { ClientSideSuspense, useInboxNotifications } from "@liveblocks/react";
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Inbox = () => {
	return (
		<ClientSideSuspense fallback={null}>
			<InboxMenu />
		</ClientSideSuspense>
	);
};

const InboxMenu = () => {
	const { inboxNotifications } = useInboxNotifications();

	return <div></div>;
};
