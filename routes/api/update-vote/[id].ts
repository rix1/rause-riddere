import { FreshContext } from "$fresh/server.ts";
import { updatePrincipleVote } from "../../../models/db.ts";

export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  if (req.method !== "PUT") {
    return new Response("Use PUT instead", { status: 405 });
  }

  const { id } = ctx.params;
  const increment = new URL(req.url).searchParams.get("increment") === "true";

  try {
    const response = new Response(null, { status: 204 });
    await updatePrincipleVote(id, increment);

    return response;
  } catch (error) {
    // Handle errors
    console.error("Error updating vote:", error);
    return new Response(`Could not find principle ${id}`, { status: 404 });
  }
};
