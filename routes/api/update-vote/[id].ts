import { FreshContext } from "$fresh/server.ts";
import { updateItemVote } from "../../../models/db.ts";

export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  try {
    // Extract item ID from URL path parameters
    const { id } = ctx.params;

    // Extract decrement query parameter (defaults to false if not provided)
    const decrement = req.url.includes("?decrement");

    // Call updateItemVote function with extracted parameters
    const updatedVote = await updateItemVote(id, decrement);

    // Return success response with updated vote
    return new Response(JSON.stringify(updatedVote), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors
    console.error("Error updating vote:", error);
    return new Response("Not Found", { status: 404 });
  }
};
