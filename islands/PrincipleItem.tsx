import { JSX } from "preact";
import { Td } from "../components/Table.tsx";
import { useForm } from "../hooks/useForm.ts";
import { Principle } from "../models/principle.ts";

type Props = { principle: Principle } & JSX.HTMLAttributes<HTMLTableRowElement>;

export function PrincipleItem(
  { principle }: Props,
) {
  const [vote, hasVoted, error, handleSubmit] = useForm(principle);
  return (
    <tr>
      <Td class="pb-8 select-none">
        <form onSubmit={handleSubmit}>
          {!hasVoted && (
            <button
              type="submit"
              disabled={hasVoted}
              class="px-2 font-mono border-gray-500 border rounded-sm bg-white hover:bg-gray-200 align-bottom"
            >
              ↑
            </button>
          )}
          <input
            type="hidden"
            name="increment"
            value="true"
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
            <small>
              <form onSubmit={handleSubmit}>
                <button
                  disabled={!hasVoted}
                  type="submit"
                  name="increment"
                  value="false"
                  class="px-2 rounded bg-white hover:bg-gray-200 select-none disabled:opacity-0"
                >
                  Fjern stemme
                </button>
                <input
                  type="hidden"
                  name="increment"
                  value="false"
                />
                {error && <span class="text-red-700">{error}</span>}
              </form>
            </small>
          </div>
        </div>
      </Td>
    </tr>
  );
}
