export type CategoryProperties = {
  name: string;
  isActive: boolean;
  description?: string;
  createdAt?: Date;
};

export default class Category {
  constructor(public readonly props: CategoryProperties) {}

  get name() {
    return this.props.name;
  }

  get isActive() {
    return this.props.isActive;
  }

  get description() {
    return this.props.description;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}

const category = new Category({
  name: "Category 1",
  isActive: true,
  description: "Category 1 description",
  createdAt: new Date(),
});
