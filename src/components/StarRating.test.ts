import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, it } from "vitest";
import StarRating from "./StarRating.astro";

async function countStars(stars: number) {
  const container = await AstroContainer.create();
  const html = await container.renderToString(StarRating, { props: { stars } });
  return {
    solid: html.match(/star-rating-solid-star/g)?.length ?? 0,
    regular: html.match(/star-rating-regular-star/g)?.length ?? 0,
  };
}

it.each([0, 1, 2, 3, 4, 5])("renders %i stars correctly", async (i) => {
  expect(await countStars(i)).toEqual({ solid: i, regular: 5 - i });
});

it("handles large inputs gracefully", async () => {
  expect(await countStars(10)).toEqual({ solid: 5, regular: 0 });
});

it("handles negative inputs gracefully", async () => {
  expect(await countStars(-10)).toEqual({ solid: 0, regular: 5 });
});
