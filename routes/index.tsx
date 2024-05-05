import { Handlers, RouteContext } from "$fresh/server.ts";
import { PrincipleItem } from "../islands/PrincipleItem.tsx";
import { getAllPrinciples } from "../models/db.ts";

export default async function Page(req: Request, ctx: RouteContext) {
  const principles = await getAllPrinciples();
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img src="/favicon.svg" class="w-44 h-44" />
        <h1 class="text-4xl font-bold">Rause Riddere</h1>
        <p class="mt-4 mb-12 text-lg">
          Dette er en liste prinsipper fra "Manifestet" til Erlend og Steinar's
          "Rause Riddere". Manifestet er hentet episoden{" "}
          <a
            class="text-blue-800 italic"
            href="https://radio.nrk.no/podkast/baade_erlend_og_steinar_/l_edf54d11-d100-4c12-b54d-11d100fc12f9"
          >
            Rause ridderes begynnelse
          </a>.
        </p>
        <table class="space-y-3">
          <thead class="sr-only">
            <tr>
              <td>Stem opp</td>
              <td>Stemmer</td>
              <td>Sitat</td>
            </tr>
          </thead>
          <tbody>
            {principles.map((p) => <PrincipleItem principle={p} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
