import { useSignal } from "@preact/signals";
import { JSX } from "preact";
import { useState } from "preact/hooks";
import { Td } from "../components/Table.tsx";
import { Principle } from "../models/principle.ts";

type Props = { principle: Principle } & JSX.HTMLAttributes<HTMLTableRowElement>;

export function PrincipleItem(
  { principle }: Props,
) {
  const vote = useSignal<number>(principle.vote || 0);
  const [hasVoted, setHasVoted] = useState(false);
  return (
    <tr>
      <Td class="pb-8 select-none">
        <form method="POST">
          {!hasVoted && (
            <button
              type="submit"
              name="increment"
              value="true"
              disabled={hasVoted}
              class="px-2 font-mono border-gray-500 border rounded-sm bg-white hover:bg-gray-200 align-bottom"
              // onClick={() => {
              //   setHasVoted(true);
              //   vote.value += 1;
              // }}
            >
              ↑
            </button>
          )}
          <input
            type="hidden"
            id="principleId"
            name="principleId"
            value={principle.id}
          />
        </form>
      </Td>
      <Td class="pb-8 pl-3 min-w-16 text-center select-none">
        <span class={`text-2xl ${hasVoted && "text-orange-500 font-medium"}`}>
          {vote}
        </span>
      </Td>
      <Td class="pb-8">
        <div>
          <p class="ml-2 text-2xl">{principle.content}</p>
          <div class="space-x-2">
            {hasVoted && (
              <small>
                <form method="POST">
                  <button
                    type="submit"
                    name="increment"
                    value="false"
                    class="px-2 rounded bg-white hover:bg-gray-200 select-none"
                    // onClick={() => {
                    //   setHasVoted(false);
                    //   vote.value -= 1;
                    // }}
                  >
                    Fjern stemme
                  </button>
                  <input
                    type="hidden"
                    id="principleId"
                    name="principleId"
                    value={principle.id}
                  />
                </form>
              </small>
            )}
            <small class="opacity-0 select-none">{vote} stemmer totalt</small>
            <small class="opacity-0 select-none">ID: {principle.id}</small>
          </div>
        </div>
      </Td>
    </tr>
  );
}
