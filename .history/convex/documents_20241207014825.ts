import { query } from "./_generated/server";

export const getDocuments = {
	handler: async (ctx) => {
		const documents = await ctx.db.query("documents").collect();
	},
};
