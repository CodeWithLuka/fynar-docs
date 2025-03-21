import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const create = mutation({
	args: {
		title: v.optional(v.string()),
		initialContent: v.optional(v.string()),
	},
	handler: async (ctx, args) => {
		// const

		return;
	},
});

export const get = query({
	handler: async (ctx) => {
		return await ctx.db.query("documents").collect();
	},
});
