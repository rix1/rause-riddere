import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rause riddere</title>
        <meta
          name="description"
          content="Manifestet er hentet fra Både Erlend og Steinar episoden Rause ridderes begynnelse"
        />
        <meta name="keywords" content="nrk,erlend,steinar,podcast" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <Component />
      </body>
      <footer className="text-gray-500 text-sm text-center mb-16 max-w-screen-md mx-auto">
        <p>
          Dette er et proof-of-concept på hvordan{" "}
          <a href="https://www.tiktok.com/@filipjohansen">@filipjohansen's</a>
          {" "}
          <a class="text-[#db2777]" href="https://www.rauseriddere.no/">
            rauseriddere.no
          </a>{" "}
          ville vært med upvotes.
        </p>
        <p>
          Laget av <a class="text-[#db2777]" href="https://rix1.dev">@rix1</a>
          {" "}
          ved hjelp av{" "}
          <a class="text-[#db2777]" href="https://fresh.deno.dev/">
            Deno Fresh
          </a>{" "}
          og <a class="text-[#db2777]" href="https://deno.com/kv">Deno KV</a>.
        </p>
      </footer>
    </html>
  );
}
