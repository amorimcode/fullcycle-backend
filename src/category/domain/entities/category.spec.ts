import Category from "./category";
import { omit } from "lodash";
import { validate as uuidValidate } from "uuid";

describe("Category test", () => {
  test("constructor of category", () => {
    // Triple AAA - Arrange, Act, Assert

    let category = new Category({
      name: "Movie",
    });

    let props = omit(category.props, "createdAt");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      isActive: true,
    });

    expect(category.props.createdAt).toBeInstanceOf(Date);

    category = new Category({
      name: "Movie",
      description: "some description",
      isActive: false,
    });

    let createdAt = new Date();

    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      isActive: false,
      createdAt,
    });

    category = new Category({
      name: "Movie",
      description: "other description",
      isActive: false,
    });

    category = new Category({
      name: "Movie",
      isActive: true,
    });

    //  Assert    // expect(category.name).toBe("Movie");
    // expect(category.description).toBe("Movie description");
    // expect(category.isActive).toBe(true);
    // expect(category.createdAt).toBe(createdAt);
  });

  test("if field", () => {
    const category = new Category({ name: "Movie" });
    expect(category.id).not.toBeNull();
    expect(uuidValidate(category.id)).toBeTruthy();
  });

  test("getter of name field", () => {
    const category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");
  });

  test("getter and setter of description field", () => {
    const category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");
  });
});
