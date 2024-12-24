export default abstract class BaseModel {
    attributes: any;
    protected constructor();
    create(model?: any): void;
    abstract resource(): string;
    find<T>(id: number): Promise<T | undefined>;
    update<T>(): Promise<T | undefined>;
}
