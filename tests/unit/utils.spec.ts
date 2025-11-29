import { getDateString, getDateTimeString } from "../../src/utils/dates";

describe("getDateTimeString", () => {
  it("returns placeholder string if value is undefined", () => {
    const dateStringUndefined = getDateTimeString(undefined);
    expect(dateStringUndefined).toEqual("some point in time");
  });

  it("returns a string that can be manipulated with Date API", () => {
    const dateString = getDateTimeString("2020-01-01");
    const timestamp = Date.parse(dateString);
    expect(timestamp).not.toBeNaN();
  });
});

describe("getDateString", () => {
  it("returns empty string if value is undefined", () => {
    const dateStringUndefined = getDateString(undefined);
    expect(dateStringUndefined).toEqual("");
  });

  it("returns a string that can be manipulated with Date API", () => {
    const dateString = getDateString("2020-01-01");
    const timestamp = Date.parse(dateString);
    expect(timestamp).not.toBeNaN();
  });
});
