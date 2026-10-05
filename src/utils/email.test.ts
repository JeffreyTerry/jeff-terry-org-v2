import { expect, it } from "vitest";
import { decodeEmail, encodeEmail } from "./email";

it("decodes the encoded address", () => {
  const encodedEmail = encodeEmail("test@gmail.com");
  expect(encodedEmail.join(",")).not.toContain("gmail");
  expect(decodeEmail(encodedEmail)).toBe("test@gmail.com");
});
