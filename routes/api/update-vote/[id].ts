import { FreshContext } from "$fresh/server.ts";
import { updatePrincipleVote } from "../../../models/db.ts";

export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  // if (req.method !== "PUT") {
  //   return new Response("Method Not Allowed", { status: 405 });
  // }

  try {
    const { id } = ctx.params;
    const decrement = req.url.includes("?decrement");

    await updatePrincipleVote(id, decrement);

    return new Response(null, { status: 204 });
  } catch (error) {
    // Handle errors
    console.error("Error updating vote:", error);
    return new Response("Not Found", { status: 404 });
  }
};
