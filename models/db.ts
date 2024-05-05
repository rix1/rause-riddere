import { getSeedItems } from "./data.ts";
import { Item } from "./item.ts";

const kv = await Deno.openKv();

export async function getAllItems(): Promise<Item[]> {
  const iter = kv.list<Item>({ prefix: ["item"] });
  const items = [];
  for await (const item of iter) {
    console.log(item);

    items.push(item.value);
  }
  return items;
}

export async function updateItemVote(
  itemId: string,
  decrement: boolean = false,
): Promise<Item> {
  const primaryKey = ["item", itemId];
  const item = await kv.get<Item>(primaryKey);

  console.log(item);

  if (!item.value) {
    throw new Error(`Item ${itemId} not found`);
  }

  const incrementValue = decrement ? -1 : 1;
  item.votes += incrementValue;
  await kv.atomic().check({ key: primaryKey, versionstamp: null }).set(item)
    .commit();

  return item;
}

export async function seed(): Promise<boolean> {
  const seedData = await getSeedItems();

  for (let i = 0; i < seedData.length; i++) {
    const item = seedData[i];
    const primaryKey = ["item", item.id];
    try {
      await kv.atomic().check({ key: primaryKey, versionstamp: null }).set(
        primaryKey,
        item,
      ).commit();
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  console.info("Seed complete");
  return true;
}
