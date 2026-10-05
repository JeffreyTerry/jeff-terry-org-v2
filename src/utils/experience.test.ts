import { expect, it } from "vitest";
import { getHoursSpentBuildingSoftware, getYearsCoding } from "./experience";

it("counts whole years since I started coding", () => {
  expect(getYearsCoding(new Date(2026, 9, 4))).toBe(17);
});

it("rounds the hours estimate down to the nearest thousand", () => {
  expect(getHoursSpentBuildingSoftware(new Date(2024, 2, 23))).toBe("18,000");
  expect(getHoursSpentBuildingSoftware(new Date(2026, 9, 4))).toBe("21,000");
});
