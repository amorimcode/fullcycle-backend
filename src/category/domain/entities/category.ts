import UniqueEntityId from "@seedwork/domain/unique-entity-id.vo";

export type CategoryProperties = {
  name: string;
  isActive?: boolean;
  description?: string;
  createdAt?: Date;
};

export default class Category {
  public id: UniqueEntityId;

  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    this.id = this.id || new UniqueEntityId();
    this.description = this.props.description;
    this.props.isActive = this.props.isActive ?? true;
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get isActive() {
    return this.props.isActive;
  }

  private set isActive(value) {
    this.props.isActive = value;
  }

  get description() {
    return this.props.description;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
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
