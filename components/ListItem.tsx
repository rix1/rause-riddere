import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";
import { Td } from "./Table.tsx";

export function ListItem(
  { children, ...props }: JSX.HTMLAttributes<HTMLTableRowElement>,
) {
  const count = useSignal<number>(0);
  const [hasVoted, setHasVoted] = useState(false);
  const spacing = "pb-1";
  return (
    <tr
      {...props}
      class=""
    >
      <Td class={`${spacing} select-none`}>
        {!hasVoted && (
          <button
            disabled={hasVoted}
            class="px-2 font-mono border-gray-500 border rounded-sm bg-white hover:bg-gray-200"
            style={{ verticalAlign: "bottom" }}
            onClick={() => {
              setHasVoted(true);
              count.value += 10;
            }}
          >
            ↑
          </button>
        )}
      </Td>
      <Td class={`${spacing} pl-3 min-w-16 text-center select-none`}>
        <span class={`text-2xl ${hasVoted && "text-orange-500 font-medium"}`}>
          {count}
        </span>
      </Td>
      <Td class={`${spacing}`}>
        <div>
          <p class="ml-2 text-2xl">{children}</p>
          <div>
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
            <small class="opacity-0">{count} stemmer totalt</small>
          </div>
        </div>
      </Td>
    </tr>
  );
}
