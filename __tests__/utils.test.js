import { filterArray } from "../src/utils";

describe("filterArray", () => {
  const items = [
    {
      field: "Zl",
      firstName: "Bobby",
      secondName: "Hunter"
    }, {
      field: "Z",
      firstName: "Oliver",
      secondName: "Cole"
    }];

  it("should filter by word entirely", () => {
    const searchText = "Oliver";
    const filteredArray = filterArray(items, searchText);

    expect(filteredArray).toEqual([items[1]]);
  });

  it("should filter by some part of the word", () => {
    const searchText = "ive";
    const filteredArray = filterArray(items, searchText);

    expect(filteredArray).toEqual([items[1]]);
  });

  it("should filter ignoring case", () => {
    const searchText = "ObB";
    const filteredArray = filterArray(items, searchText);

    expect(filteredArray).toEqual([items[0]]);
  });

  it("should filter by all object properties", () => {
    const searchText = "z";
    const filteredArray = filterArray(items, searchText);

    expect(filteredArray).toEqual(items);
  });

  it("should filter by certain object properties", () => {
    const searchText = "L";
    const filteredArray = filterArray(items, searchText, ["field"]);

    expect(filteredArray).toEqual([items[0]]);
  });
});
