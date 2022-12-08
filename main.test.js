/**
* @jest-environment jsdom
*/
import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search(newsList)).toBe("I am a cool web developer");
});

test("Sort ascending testing", () => {
  expect(newsList).toStrictEqual(sort("ascending"))
});

test("Sort descending testing", () => {
  expect(newsList).toStrictEqual(sort("descending"))
});
