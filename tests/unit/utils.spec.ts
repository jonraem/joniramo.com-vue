import { getDateStringFromPublishedAt } from "../../src/utils/dates";

describe("getDateStringFromPublishedAt", () => {
  it("returns placeholder string if value is undefined", () => {
    const dateStringUndefined = getDateStringFromPublishedAt(undefined);
    expect(dateStringUndefined).toEqual("some point in time");
  });

  it("returns a string that can be manipulated with Date API", () => {
    const dateString = getDateStringFromPublishedAt("2020-01-01");
    const timestamp = Date.parse(dateString);
    expect(timestamp).not.toBeNaN();
  });
});
