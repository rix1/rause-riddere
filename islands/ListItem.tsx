import { useSignal } from "@preact/signals";
import { JSX } from "preact";
import { useState } from "preact/hooks";
import { Td } from "../components/Table.tsx";
import { Item } from "../models/item.ts";

type Props = { item: Item } & JSX.HTMLAttributes<HTMLTableRowElement>;

export function ListItem(
  { item }: Props,
) {
  const count = useSignal<number>(item.votes || 0);
  const [hasVoted, setHasVoted] = useState(false);
  return (
    <tr>
      <Td class={`pb-8 select-none`}>
        {!hasVoted && (
          <button
            disabled={hasVoted}
            class="px-2 font-mono border-gray-500 border rounded-sm bg-white hover:bg-gray-200"
            style={{ verticalAlign: "bottom" }}
            onClick={() => {
              setHasVoted(true);
              count.value += 1;
            }}
          >
            ↑
          </button>
        )}
      </Td>
      <Td class="pb-8 pl-3 min-w-16 text-center select-none">
        <span class={`text-2xl ${hasVoted && "text-orange-500 font-medium"}`}>
          {count}
        </span>
      </Td>
      <Td class="pb-8">
        <div>
          <p class="ml-2 text-2xl">{item.content}</p>
          <div className="space-x-2">
            {hasVoted && (
              <small>
                <button
                  class="px-2 rounded bg-white hover:bg-gray-200 select-none"
                  onClick={() => {
                    setHasVoted(false);
                    count.value -= 1;
                  }}
                >
                  Fjern stemme
                </button>
              </small>
            )}
            <small class="">{item.id}</small>
            <small class="opacity-0">{count} stemmer totalt</small>
          </div>
        </div>
      </Td>
    </tr>
  );
}
