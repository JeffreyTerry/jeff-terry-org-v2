// @vitest-environment jsdom
import { afterEach, expect, it } from "vitest";
import { encodeEmail } from "../utils/email";
import { setUpMailToLinks } from "./mailto";

afterEach(() => {
  document.body.innerHTML = "";
});

it("ignores clicks dispatched from scripts", () => {
  document.body.innerHTML = `<a href="#" data-encoded-email="${encodeEmail("test@gmail.com")}">hello</a>`;
  setUpMailToLinks();

  const hrefBefore = window.location.href;
  document.querySelector("a")!.click();
  expect(window.location.href).toBe(hrefBefore);
});
