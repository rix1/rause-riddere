import { useState } from "preact/hooks";

import { Principle } from "../models/principle.ts";

class HttpError extends Error {
  constructor(public response: Response, text: string) {
    super(`HTTP error ${response.status}: ${text}`);
  }
}

async function updateVote(url: string) {
  const result = await fetch(url, {
    method: "PUT",
  });
  if (!result.ok) {
    const text = await result.text();
    throw new HttpError(result, text);
  }
  return "OK";
}

export function useForm(
  principle: Principle,
): [number, boolean, string, (e: SubmitEvent) => void] {
  const [vote, setVote] = useState<number>(principle.vote || 0);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (evt: SubmitEvent) => {
    evt.preventDefault();
    const target = evt.target as HTMLFormElement;
    const formData = new FormData(target);

    const increment = formData.get("increment") === "true";

    setVote((prev) => prev + (increment ? 1 : -1));
    setHasVoted(increment);

    try {
      await updateVote(
        `/api/update-vote/${principle.id}?increment=${increment}`,
      );
    } catch (error) {
      if (error instanceof HttpError) {
        setError(error.message);
      }
    }
  };

  return [vote, hasVoted, error, handleSubmit];
}
