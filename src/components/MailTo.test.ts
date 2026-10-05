import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, it } from "vitest";
import MailTo from "./MailTo.astro";
import { encodeEmail } from "../utils/email";

it("keeps the email address out of the HTML", async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(MailTo, {
    props: { encodedEmail: encodeEmail("test@gmail.com"), class: "test-class" },
    slots: { default: "hello" },
  });

  expect(html).toContain("hello");
  expect(html).toContain("test-class");
  expect(html).not.toContain("test@");
  expect(html).not.toContain("gmail");
});
