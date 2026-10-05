// The address never appears in plain text in the HTML, the JS bundle or the
// source. It is stored XOR-encoded and only decoded when a person clicks.
const KEY = "jeffterry.org";

export const encodeEmail = (email: string) =>
  [...email].map((c, i) => c.charCodeAt(0) ^ KEY.charCodeAt(i % KEY.length));

export const decodeEmail = (encoded: number[]) =>
  encoded.map((n, i) => String.fromCharCode(n ^ KEY.charCodeAt(i % KEY.length))).join("");
