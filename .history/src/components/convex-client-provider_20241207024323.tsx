"use client";

import {
	ConvexReactClient,
	Authenticated,
	Unauthenticated,
	AuthLoading,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";

import { ClerkProvider, useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
		>
			<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
				<Authenticated>{children}</Authenticated>
				<Unauthenticated>
					<p>Please Log In</p>
				</Unauthenticated>
				<AuthLoading>
					<p>Loading . . .</p>
				</AuthLoading>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
}
