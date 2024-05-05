export async function hashString(input: string): Promise<string> {
  // Convert the string to a buffer
  const encoder = new TextEncoder();
  const data = encoder.encode(input);

  // Compute the hash
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);

  // Convert the hash buffer to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}
