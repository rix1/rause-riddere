import { seed } from "../../models/db.ts";

export const handler = async (
  req: Request,
): Promise<Response> => {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");

  if (key === Deno.env.get("SEED_KEY")) {
    await seed();

    // Respond with a success message
    return new Response("Seed command executed successfully", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } else {
    return new Response("Forbidden", { status: 403 });
  }
};
