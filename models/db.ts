import { buildPrincipleSeed } from "./seed.ts";
import { isPrinciple, Principle } from "./principle.ts";

const kv = await Deno.openKv();

export async function getAllPrinciples(): Promise<Principle[]> {
  const iter = kv.list<Principle>({ prefix: ["principle"] });
  const principles = [];
  for await (const principle of iter) {
    principles.push(principle.value);
  }

  return principles;
}

export async function updatePrincipleVote(
  principleId: string,
  decrement: boolean = false,
) {
  const primaryKey = ["principle", principleId];

  console.log(primaryKey);

  let res = { ok: false };
  let prevVote = 0;
  let newVote = 0;

  while (!res.ok) {
    const principleRes = await kv.get(primaryKey);
    const principle = isPrinciple(principleRes.value);

    prevVote = principle.vote;
    newVote = prevVote + (decrement ? -1 : 1);

    res = await kv.atomic().check(principleRes).set(primaryKey, {
      ...principle,
      vote: newVote,
    }).commit();
  }
  console.info(`Vote updated for ${principleId}: ${prevVote}->${newVote}`);
}

export async function seed(): Promise<boolean> {
  const seedData = await buildPrincipleSeed();
  let created = 0;

  // First delete all keys
  const iter = kv.list<Principle>({ prefix: ["principle"] });
  for await (const principle of iter) {
    await kv.delete(principle.key);
  }

  // Then create them again from scratch
  for (let i = 0; i < seedData.length; i++) {
    const principle = seedData[i];
    const primaryKey = ["principle", principle.id];
    try {
      const commitRes = await kv.atomic().check({
        key: primaryKey,
        versionstamp: null,
      }).set(
        primaryKey,
        principle,
      ).commit();

      if (commitRes.ok) {
        created += 1;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  console.info(`Seed complete, updated ${created}/${seedData.length} items`);
  return true;
}
