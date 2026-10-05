// Based on Jason Bellamy's npm package react-mailto: https://github.com/jasonbellamy/react-mailto
import { decodeEmail } from "../utils/email";

/** Opens the visitor's email client when they click a `<MailTo>` link. */
export function setUpMailToLinks(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>("a[data-encoded-email]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      // Ignore clicks dispatched from scripts (e.g. `element.click()` in a scraper)
      if (!event.isTrusted) return;
      const encoded = (link.dataset.encodedEmail ?? "").split(",").map(Number);
      window.location.href = `mailto:${decodeEmail(encoded)}`;
    });
  });
}
