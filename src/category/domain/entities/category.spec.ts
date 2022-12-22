import Category from "./category";

describe("Category test", () => {
  test("constructor of category", () => {
    // Triple AAA - Arrange, Act, Assert

    //  Arrange
    const props = {
      name: "Movie",
      description: "Movie description",
      isActive: true,
      createdAt: new Date(),
    };

    //  Act
    const category = new Category(props);

    //  Assert
    expect(category.name).toBe("Movie");
    expect(category.description).toBe("Movie description");
    expect(category.isActive).toBe(true);
    expect(category.createdAt).toBe(props.createdAt);
  });
});
